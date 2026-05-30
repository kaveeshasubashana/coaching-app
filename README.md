# Coaching App

A full-stack coaching platform built with Next.js, Spring Boot, and MongoDB.

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Backend

* Spring Boot
* Spring Security
* MongoDB
* Maven

### Database

* MongoDB Atlas / MongoDB Local

---

## Project Structure

```text
coaching-app
├── frontend
└── backend
```

---

## Features

* User Registration
* User Login
* Password Encryption using BCrypt
* MongoDB Database Integration
* REST API Architecture
* Responsive UI

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies and run:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8081
```

---

## Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

## API Endpoints

### Test Backend

```http
GET /api/auth/test
```

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

## Environment Variables

Backend configuration:

```properties
spring.data.mongodb.uri=YOUR_MONGODB_URI
```

--- 

 # output 

 ## Home Page
<img width="1202" height="865" alt="image" src="https://github.com/user-attachments/assets/6545410f-e2b8-4c3d-bb87-8ed7f5865d52" />

## Login Page
<img width="1266" height="865" alt="image" src="https://github.com/user-attachments/assets/c2d8dde0-6245-4680-983f-355eff660ce4" /> 

## Sign Up Page 
<img width="1163" height="815" alt="image" src="https://github.com/user-attachments/assets/9b7c449d-20d8-400f-8b15-5713fe3ebfce" />




