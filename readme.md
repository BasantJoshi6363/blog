# Blog Website

A blog website built with **Node.js** for the backend and **React.js** for the frontend. This project implements a basic blog platform where users can sign up, log in, and create, read, update, and delete blog posts.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Backend API](#backend-api)
- [Frontend](#frontend)
- [Models](#models)
  - [User Model](#user-model)
  - [Blog Model](#blog-model)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Users can sign up, log in, and access personalized blog posts.
- **CRUD Operations on Blogs**: Users can create, read, update, and delete their blog posts.
- **Responsive UI**: The website is responsive and optimized for various screen sizes.

## Tech Stack
- **Backend**: Node.js, Express, MongoDB (Mongoose for ORM)
- **Frontend**: React.js, React Router, Axios
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS (with or without a framework like Bootstrap, Tailwind, or Material UI)

## Installation

### Backend (Node.js)

1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/blog-website.git
   cd blog-website
Navigate to the backend folder and install dependencies.

bash
Copy code
cd backend
npm install
Create a .env file and add the required environment variables:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server.

bash
Copy code
npm start
The backend server will run on http://localhost:5000.

Frontend (React.js)
Navigate to the frontend folder and install dependencies.

bash
Copy code
cd frontend
npm install
Start the React development server.

bash
Copy code
npm start
The frontend will run on http://localhost:3000.

Backend API
The backend exposes the following API endpoints:

User Routes:
POST /api/users/signup - Register a new user.
POST /api/users/login - Log in with username and password.
Blog Routes:
GET /api/blogs - Fetch all blogs.
GET /api/blogs/:id - Fetch a specific blog by ID.
POST /api/blogs - Create a new blog post (authentication required).
PUT /api/blogs/:id - Update an existing blog post (authentication required).
DELETE /api/blogs/:id - Delete a blog post (authentication required).
Frontend
The frontend is built with React.js. It interacts with the backend API to provide an interactive user experience for managing blog posts.

Users can register and log in to access personalized features.
The homepage displays a list of all blog posts.
Users can create new blogs and manage their posts from the dashboard.
The frontend includes the following pages:

Home: Displays all blog posts.
Login: Allows users to log in.
Signup: Allows new users to register.
Dashboard: Users can create and manage their blog posts.
Models
User Model
The User model represents the users in the system. It has the following fields:

username (String): A unique username for the user.
email (String): The user's email address.
password (String): The user's hashed password.
createdAt (Date): The date the user was created.
Blog Model
The Blog model represents the blog posts created by users. It has the following fields:

title (String): The title of the blog.
content (String): The body of the blog post.
author (ObjectId, Reference to User model): The user who created the blog post.
createdAt (Date): The date the blog post was created.
updatedAt (Date): The date the blog post was last updated.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
