
# 🏫 School Management Location API

A Node.js and Express-based RESTful API for managing school locations. This system allows users to add schools with geographical coordinates and retrieve a sorted list of schools based on proximity to a user-defined location.



---

## 📌 Features

- 🚀 Add new schools with name, address, latitude, and longitude
- 📍 Retrieve schools sorted by distance from a given location
- ✅ Input validation and error handling
- 🌐 RESTful API structure
- 🗂️ Scalable folder structure for controllers, routes, and config
- ☁️ Hosted on Render with live endpoints

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Deployment:** Render
- **Tools:** Postman (for testing), dotenv, nodemon

---

## 📦 Folder Structure

```

School\_management\_locations/
│
├── controllers/
│   └── schoolController.js
├── routes/
│   └── schoolRoutes.js
├── config/
│   └── db.js
├── .env
├── package.json
├── server.js
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Ujjwalks9/School_management_locations.git
cd School_management_locations
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-password
DB_NAME=school_management
PORT=10000
```

### 4. Start the server

```bash
npm start
```

---

## 🧪 API Documentation

### 1. **Add School**

* **Endpoint:** `POST /addSchool`
* **Payload (JSON):**

```json
{
  "name": "Green Valley School",
  "address": "123 Main St, Delhi",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

* **Response:**

```json
{
  "message": "School added successfully"
}
```

---

### 2. **List Schools by Proximity**

* **Endpoint:** `GET /listSchools?lat=<latitude>&lon=<longitude>`

* **Example:**
  `/listSchools?lat=28.6&lon=77.2`

* **Response:**

```json
[
  {
    "id": 1,
    "name": "Green Valley School",
    "address": "123 Main St",
    "latitude": 28.6139,
    "longitude": 77.209,
    "distance": 1.2
  },
  ...
]
```

---

## 🌍 Live Deployment

The project is deployed on [Render](https://render.com).

* 🟢 Base URL: [https://school-management-locations-api-guj9.onrender.com](https://school-management-locations-api-guj9.onrender.com)
* Example API:

  * `POST /addSchool`
  * `GET /listSchools?lat=28.6&lon=77.2`

---

## 📫 Postman Collection

Use this Postman collection to test both APIs:

📥 [Download Postman Collection](#) (add your exported collection link here)

---

## 💡 Future Enhancements

* 🧭 Integrate Google Maps API for visualizing school locations
* 🛡️ Add authentication and user roles
* 📈 Store request logs and analytics
* 🧪 Add unit tests using Jest or Mocha

---

## 🧑‍💻 Author

**Ujjwal Kumar Singh**
Node.js Developer Intern
🌐 [GitHub](https://github.com/Ujjwalks9)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

