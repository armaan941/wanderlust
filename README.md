# 🌍 WanderLust

A full-stack travel listing web application inspired by platforms like Airbnb, where users can explore destinations, create their own stay listings, upload images, and leave reviews.

🔗 **Live Demo:** [Add your deployed link here](https://wanderlust-6co7.onrender.com/listings)
📂 **GitHub Repository:** [WanderLust](https://github.com/armaan941/wanderlust)

---

## ✨ Features

* 🔐 User Authentication (Signup / Login / Logout)
* 🏠 Create, Edit, and Delete Listings
* 🖼️ Image Upload with Cloudinary
* ⭐ Add and Delete Reviews
* 📍 Location-based stay listings
* 💬 Flash messages for user feedback
* 🛡️ Protected routes with authentication & authorization
* 📱 Responsive design for multiple devices

---

## 🚀 Live Preview

Once your project is deployed, replace the placeholder below with your real link:

```md
🔗 **Live Demo:** [WanderLust Live](https://wanderlust-6co7.onrender.com/listings)
```

---

## 🛠️ Tech Stack

### **Frontend**

* HTML
* CSS
* Bootstrap
* EJS

### **Backend**

* Node.js
* Express.js

### **Database**

* MongoDB
* Mongoose

### **Authentication**

* Passport.js
* Passport Local
* Express Session

### **File Upload & Media**

* Cloudinary
* Multer
* Multer Storage Cloudinary

### **Validation & Utilities**

* Joi
* Method Override
* Connect Flash
* Dotenv

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
│── app.js
│── cloudConfig.js
│── schema.js
│── package.json
│── README.md
```

---

## 📸 Screenshots

## Homepage
![Homepage](./screenshots/homepage.png)

## Listing Page
![Listing Page](./screenshots/listing-page.png)

## Show Listing Page
![Show Listing Page](./screenshots/show-page.png)

## Create Listing
![Create Listing](./screenshots/create-listing.png)

## Login Page
![Login Page](./screenshots/login-page.png)
```

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

### 3️⃣ Create a `.env` file

In the root folder, create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_token
```

---

### 4️⃣ Run the app locally

```bash
nodemon app.js
```

or

```bash
node app.js
```

---

### 5️⃣ Open in browser

```bash
http://localhost:8080/listings
```

---

## 🔐 Authentication & Authorization

This project includes secure authentication and authorization features:

* User Signup / Login / Logout
* Only logged-in users can create listings
* Only owners can edit/delete their listings
* Only review authors can delete their reviews

---

## 🌐 Deployment

This project can be deployed using:

* **Render** → backend hosting
* **MongoDB Atlas** → database
* **Cloudinary** → image storage

After deployment, update this line near the top:

```md
🔗 **Live Demo:** [WanderLust Live](https://your-live-link.onrender.com)
```

---

## 🧠 Learning Outcomes

This project helped in understanding and practicing:

* RESTful Routing
* MVC Architecture
* CRUD Operations
* Authentication & Sessions
* File Uploads
* Database Relationships
* Deployment of Full-Stack Applications

---

## 🚧 Future Improvements

* 🔍 Search & filter listings
* ❤️ Wishlist / favorites feature
* 🗺️ Interactive map for listings
* 📱 Improved mobile responsiveness
* 💬 User-to-user messaging
* 📊 Better admin / dashboard features

---

## 👨‍💻 Author

**Armaan Mulani**

* GitHub: [@armaan941](https://github.com/armaan941)

---

## 📄 License

This project is built for educational and learning purposes.
