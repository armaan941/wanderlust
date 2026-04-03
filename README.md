# 🌍 WanderLust

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![EJS](https://img.shields.io/badge/EJS-Templating-red)
![Bootstrap](https://img.shields.io/badge/Bootstrap-UI-purple)

**WanderLust** is a full-stack travel stay listing web application inspired by platforms like **Airbnb**.
It allows users to explore destinations, create and manage listings, upload images, and share reviews.

🔗 **Live Demo:** [WanderLust Live](https://wanderlust-armaan.vercel.app/listings)
📂 **GitHub Repository:** [WanderLust](https://github.com/armaan941/wanderlust)

---

## 📌 Overview

WanderLust simulates a real-world accommodation booking platform where users can:

* Explore travel listings
* Create and manage their own stays
* Upload images using cloud storage
* Add reviews and ratings
* Experience secure login and protected actions

This project demonstrates real-world full-stack development concepts including **MVC architecture, authentication, CRUD operations, and deployment**.

---

## ✨ Key Highlights

* Full-stack web application with authentication & authorization
* RESTful CRUD functionality
* Cloud-based image upload (Cloudinary)
* MVC architecture for scalable code
* Fully deployed and production-ready

---

## ✨ Features

* 🔐 User Authentication (Signup / Login / Logout)
* 🏠 Create, Edit, Delete Listings
* 🖼️ Image Upload via Cloudinary
* ⭐ Add and Delete Reviews
* 📍 Location-based Listings
* 💬 Flash Messages for Feedback
* 🛡️ Protected Routes & Authorization
* 📱 Responsive UI Design

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication & Security

* Passport.js
* Express Session

### File Upload & Media

* Cloudinary
* Multer

### Utilities

* Joi
* Dotenv
* Connect Flash
* Method Override

---

## 🧱 Project Architecture (MVC)

* **Models** → Database schemas
* **Views** → UI templates (EJS)
* **Controllers** → Business logic
* **Routes** → API endpoints

This improves scalability, maintainability, and clean code structure.

---

## 📂 Folder Structure

```bash
WanderLust/
│── controllers/
│── models/
│── routes/
│── views/
│── public/
│── utils/
│── init/
│── app.js
│── cloudConfig.js
│── middleware.js
│── schema.js
│── package.json
│── README.md
```

---

## 📸 Screenshots

### 🏠 Homepage

![Homepage](./screenshots/homepage.png)

### 📋 Listing Page

![Listing Page](./screenshots/listing-page.png)

### ➕ Create Listing

![Create Listing](./screenshots/create-listing.png)

### 🔐 Login Page

![Login Page](./screenshots/login-page.png)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/armaan941/wanderlust.git
cd wanderlust
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token
```

---

### 4️⃣ Run the application

```bash
nodemon app.js
```

or

```bash
node app.js
```

---

### 5️⃣ Open in browser

```
http://localhost:8080/listings
```

---

## 🔐 Authentication & Authorization

* Users must be logged in to create listings
* Only listing owners can edit/delete listings
* Only review authors can delete reviews

Ensures secure and role-based access control.

---

## 🌐 Deployment

This project is deployed using:

* **Vercel / Render** → Hosting
* **MongoDB Atlas** → Database
* **Cloudinary** → Image storage

🔗 **Live Project:**
https://wanderlust-armaan.vercel.app/listings

---

## 🧠 Learning Outcomes

* RESTful Routing
* MVC Architecture
* CRUD Operations
* Authentication & Sessions
* File Upload Handling
* Cloud Integration
* Full-Stack Deployment

---

## 🚧 Future Improvements

* 🔍 Search & Filters
* ❤️ Wishlist Feature
* 🗺️ Interactive Maps
* 💬 Messaging System
* 📊 Admin Dashboard
* 📅 Booking System

---

## 👨‍💻 Author

**Armaan Mulani**

* GitHub: https://github.com/armaan941

---

## 📄 License

This project is built for educational purposes.
