# 🚀 Team Task Manager – Backend

A robust backend API for a **Team Task Management System** built using **Node.js, Express, MongoDB, and JWT Authentication**.

---

## 📌 Features

- 🔐 Authentication (Signup/Login with JWT)
- 👥 Role-Based Access Control (Admin / Member)
- 📁 Project Management
- 📝 Task Creation & Assignment
- 📊 Task Status Tracking (To Do / In Progress / Done)
- ⏰ Overdue Task Detection
- 🔒 Protected Routes using Middleware

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcryptjs (Password Hashing)
- CORS
- dotenv

---

## 📂 Project Structure
server/
│── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.ts
│
│── .env
│── package.json
│── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https:[//github.com/your-username/task-manager-backend.git](https://github.com/SanjanaSingh1818/Task_Manager_Backend-.git)

cd task-manager-backend

---

### 2. Install dependencies
npm install

---

### 3. Create `.env` file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

---

### 4. Run the server
npm run dev

---

## 🌐 API Endpoints

### 🔐 Auth Routes

- POST `/api/auth/signup` → Register user  
- POST `/api/auth/login` → Login user  
- GET `/api/auth/me` → Get current user (Protected)  

---

### 📁 Project Routes

- GET `/api/projects` → Get all projects  
- POST `/api/projects` → Create project (Admin)  
- GET `/api/projects/:id` → Get single project  
- DELETE `/api/projects/:id` → Delete project (Admin)  

---

### 📝 Task Routes

- GET `/api/tasks` → Get tasks (role-based)  
- POST `/api/tasks` → Create task (Admin)  
- PATCH `/api/tasks/:id` → Update task  
- DELETE `/api/tasks/:id` → Delete task (Admin)  

---

### 👥 User Routes

- GET `/api/users` → Get all users (Protected)  

---

## 🔐 Authentication

Use JWT token in headers:
Authorization: Bearer <your_token>


---

## 🚀 Deployment

Backend can be deployed on:

- Railway/Render

Steps:
1. Push code to GitHub  
2. Connect repository to Railway  
3. Add environment variables  
4. Deploy  

---

## 🧪 Testing

You can test APIs using:

- Postman  
- Thunder Client  

---

## 💡 Future Improvements

- Notifications system  
- File attachments  
- Comments on tasks  
- Real-time updates  

---

## 👨‍💻 Author

Sanjana Singh

---

## 📜 License

This project is licensed under the MIT License.
