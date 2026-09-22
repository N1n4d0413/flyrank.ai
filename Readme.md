# FlyRank AI — Backend AI Engineering Internship

Repository containing my work and implementations completed during the
FlyRank AI Backend AI Engineering Internship.

---

# Build Your First CRUD API

A simple **Task Management REST API** built with Node.js and Express.js. The project implements complete CRUD operations using in-memory data and provides interactive API documentation through Swagger UI.

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Swagger UI
- OpenAPI
- npm

## Features

- Create tasks
- Get all tasks
- Get a task by ID
- Update tasks
- Delete tasks
- Input validation
- Proper HTTP status codes
- In-memory task storage
- Interactive Swagger API documentation

## Project Structure

```text
CRUD API/
├── src/
│   └── server.js
│
├── swagger/
│   └── openapi.json
│
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd "CRUD API"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

The API will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| GET | `/` | Get API information | `200` |
| GET | `/health` | Check API health | `200` |
| GET | `/tasks` | Get all tasks | `200` |
| GET | `/tasks/:id` | Get a task by ID | `200`, `404` |
| POST | `/tasks` | Create a new task | `201`, `400` |
| PUT | `/tasks/:id` | Update a task | `200`, `400`, `404` |
| DELETE | `/tasks/:id` | Delete a task | `204`, `404` |
| GET | `/docs` | Open Swagger documentation | `200` |

## Example Requests

### Create a Task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Buy milk\"}"
```

Example response:

```json
{
  "id": 4,
  "title": "Buy milk",
  "done": false
}
```

### Get All Tasks

```bash
curl http://localhost:3000/tasks
```

### Get a Task by ID

```bash
curl http://localhost:3000/tasks/1
```

### Update a Task

```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d "{\"done\":true}"
```

### Delete a Task

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

## Swagger Documentation

Interactive API documentation is available at:

```text
http://localhost:3000/docs
```

Swagger UI allows all API endpoints to be tested directly from the browser.

### Swagger Screenshot

![Swagger UI](week%202/CRUD%20api/swagger/swagger.png)

## Data Storage

This project uses **in-memory storage** for tasks.

No database is used. All task data is reset whenever the server restarts.

Example task:

```json
{
  "id": 1,
  "title": "Learn Express",
  "done": false
}
```

## What I Learned

- Building REST APIs with Express.js
- CRUD operations and HTTP methods
- Route parameters
- JSON request bodies
- HTTP status codes
- Request validation
- OpenAPI specifications
- Swagger UI
- Git-based development workflow

## Git Workflow

The project was developed incrementally using meaningful commits for each major stage:

```text
Stage 0: hello server
Stage 1: add root and health endpoints
Stage 2: add task read endpoints
Stage 3: add task creation and validation
Stage 4: complete CRUD operations
Stage 5: add Swagger API documentation
Stage 6: publish and document API
```


## Week 03

### Connecting to the Database

**Tech Stack:**  
-

### Overview

-

### Implementation

-

### Database

-

### What I Learned

-

### Challenges & Solutions

-

---

### Containerizing Your Stack

**Tech Stack:**  
-

### Overview

-

### Docker Setup

-

### What I Learned

-

### Challenges & Solutions

-

---

## Week 04

### Auth — Login & Protect

**Tech Stack:**  
-

### Overview

-

### Authentication Flow

-

### Implementation

-

### What I Learned

-

### Challenges & Solutions

-

---

## Week 05

### The Public Scraper

**Tech Stack:**  
-

### Overview

-

### Implementation

-

### What I Learned

-

### Challenges & Solutions

-

---

## Week 06

### Connect to an AI API

**Tech Stack:**  
-

### Overview

-

### AI Integration

-

### Implementation

-

### What I Learned

-

### Challenges & Solutions

-

---

## Week 07

### Build an AI Decision Flow with React Flow + Ingest

**Tech Stack:**  
-

### Overview

-

### Implementation

-

### What I Learned

-

### Challenges & Solutions

-

---

### PDF Report Generator

**Tech Stack:**  
-

### Overview

-

### Implementation

-

### What I Learned

-

### Challenges & Solutions

-

---

### Your First Background Job

**Tech Stack:**  
-

### Overview

-

### Implementation

-

### What I Learned

-

### Challenges & Solutions

-

---

## Key Takeaways

-

## Technologies Used

- 
- 
- 