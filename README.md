# User Authentication API

This project is a RESTful API built with **Express.js** and **MongoDB** for handling user authentication. It supports user registration, login, and user search with JWT-protected routes. The API is designed with a modular structure using ES6 import/export syntax.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Endpoints](#endpoints)
- [Testing](#testing)
- [GitHub Repository](#github-repository)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)

## Features

- **User Registration:**  
  - Accepts username, email, password, full name, gender, date of birth, and country.
  - Hashes passwords using bcrypt before storing in MongoDB.

- **User Login:**  
  - Validates user credentials.
  - Issues a JSON Web Token (JWT) for authenticated sessions.

- **User Search:**  
  - Search for a user by username or email.
  - Protected route that requires JWT authentication.

- **Modular Structure:**  
  - Organized code with separate files for routes, controllers, models, and middleware.

## Tech Stack

- **Node.js** & **Express.js** - Server-side framework
- **MongoDB** & **Mongoose** - Database and ORM
- **JWT (jsonwebtoken)** - Authentication mechanism
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **cors** - Enable Cross-Origin Resource Sharing

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/user-auth-api.git
   cd user-auth-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual MongoDB connection string and a secure secret key.

## Configuration

- The project uses **ES6 modules**. Ensure your `package.json` contains `"type": "module"`:
  ```json
  {
    "type": "module",
    ...
  }
  ```

- **MongoDB Connection:**  
  The connection logic is located in `config/db.js`. It establishes a connection to MongoDB using Mongoose.

## Usage

### Running the Server

- For development with auto-reload:

  ```bash
  npm run dev
  ```

- For production:

  ```bash
  npm start
  ```

The server will start on `http://localhost:5000` (or the port defined in your `.env` file).

### Endpoints

#### 1. **User Registration**

- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body Example:**
  ```json
  {
    "username": "deepakvarshney",
    "email": "deepak@example.com",
    "password": "123456",
    "fullName": "deepak varshney",
    "gender": "Male",
    "dateOfBirth": "1990-01-01",
    "country": "INDIA"
  }
  ```
- **Response:**
  - **Success (201):**
    ```json
    { "message": "User registered successfully" }
    ```
  - **Error (400/500):** Error message detailing the issue.

#### 2. **User Login**

- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates the user and returns a JWT token.
- **Request Body Example:**
  ```json
  {
    "username": "deepakvarshney",
    "password": "123456"
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    { "token": "your_jwt_token_here" }
    ```
  - **Error (400/500):** Invalid credentials or server error.

#### 3. **Search User**

- **Endpoint:** `GET /api/users/search?username=deepakvarshney`  
  *(Alternatively, use `?email=deepak@example.com`.)*
- **Description:** Fetches user details (excluding password). This is a protected route.
- **Headers:**
  ```http
  Authorization: Bearer your_jwt_token_here
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "username": "deepakvarshney",
      "email": "deepak@example.com",
      "fullName": "deepak Varshney",
      "gender": "Male",
      "dateOfBirth": "1990-01-01T00:00:00.000Z",
      "country": "INDIA",
      "createdAt": "2025-02-14T12:34:56.789Z",
      "updatedAt": "2025-02-14T12:34:56.789Z"
    }
    ```
  - **Error (401/404):** Access denied or user not found.

## Testing

You can test the API endpoints using [Postman](https://www.postman.com/):

1. **Register a new user** using the `/api/auth/register` endpoint.
2. **Login** with the `/api/auth/login` endpoint to receive a JWT token.
3. Use the JWT token in the **Authorization header** to access the protected `/api/users/search` endpoint.

## GitHub Repository

The project is hosted on GitHub. You can find the repository here:  
[https://github.com/Deepak-Varshney/user-auth-api](https://github.com/yourusername/user-auth-api)

## Video Walkthrough

For a detailed walkthrough of the project, please watch the video:  
[Video Walkthrough Link](https://youtube.com)

## License

This project is licensed under the MIT License.
