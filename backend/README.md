# TaskFlow Backend

REST API for TaskFlow application built with Node.js, Express, and MongoDB.

## Features

- 🔐 JWT Authentication
- 📝 CRUD operations for tasks
- 🗂️ MongoDB with Mongoose ODM
- 🛡️ TypeScript for type safety
- 🚨 Error handling middleware

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB

### Installation

```bash
npm install
cp .env.example .env
npm run dev
```

### API Endpoints

#### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

#### Tasks
- `GET /api/tasks` - Get all tasks (authenticated)
- `POST /api/tasks` - Create task (authenticated)
- `GET /api/tasks/:id` - Get task by ID (authenticated)
- `PUT /api/tasks/:id` - Update task (authenticated)
- `DELETE /api/tasks/:id` - Delete task (authenticated)

## Project Structure

```
src/
├── config/         # Application configuration
├── controllers/    # Request handlers
├── middleware/     # Express middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript types
└── utils/          # Utility functions
```
