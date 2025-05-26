const db = require('../config/db');
const Joi = require('joi');

const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const toRad = x => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

exports.addSchool = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, address, latitude, longitude } = req.body;

  try {
    await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Database insertion failed' });
  }
};

exports.listSchools = async (req, res) => {
  const userLat = parseFloat(req.query.lat);
  const userLon = parseFloat(req.query.lon);

  if (isNaN(userLat) || isNaN(userLon))
    return res.status(400).json({ error: 'Invalid coordinates' });

  try {
    const [schools] = await db.execute('SELECT * FROM schools');
    const withDistance = schools.map(school => ({
      ...school,
      distance: haversine(userLat, userLon, school.latitude, school.longitude),
    }));
    withDistance.sort((a, b) => a.distance - b.distance);
    res.json(withDistance);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch schools' });
  }
};
