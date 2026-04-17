# 🚀 Student Management API using WSO2 Choreo

This project is a simple REST API built to manage student data. It was developed as part of learning cloud-native application development and deploying services using WSO2 Choreo.

---

## 📌 Features

- Get all students
- Add a new student
- Delete a student

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- WSO2 Choreo (for deployment)

---

## 📂 Project Structure

student-api/
│
├── data/        # In-memory student data
├── routes/      # API route definitions
├── index.js     # Main server file
├── package.json
└── README.md

---

## 🔗 API Endpoints

### ▶️ Get all students
GET /students
### ➕ Add a new student

POST /students
Request Body:
```json
{
  "name": "Nithushan"
}

❌ Delete a student
DELETE /students/:id

▶️ Running Locally
	1.	Clone the repository
	2.	Install dependencies
            npm install
    3.	Start the server
            node index.js

Server runs on:
        http://localhost:3000

☁️ Deployment

This project is deployed using WSO2 Choreo, enabling cloud-native API deployment with minimal configuration.

🎯 Purpose

This project was created to:
	•	Learn REST API development
	•	Understand cloud deployment
	•	Gain hands-on experience with WSO2 technologies

👤 Author

Nithushan Mahendran

🚀 Future Improvements
	•	Add database (MongoDB)
	•	Add update student feature
	•	Add authentication