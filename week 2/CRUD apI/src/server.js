// Import the Express framework.
const express = require("express");

// Create our Express application.
const app = express();

// The port where our server will run.
const PORT = 3000;

// This allows Express to understand JSON data
// sent by the client in a request body.
//
// Example:
// {
//     "title": "Buy milk"
// }
app.use(express.json());


// --------------------------------------------------
// Temporary in-memory data
// --------------------------------------------------
// For Week 2, we are NOT using a database.
// These tasks are stored inside this JavaScript array.
//
// Important:
// When the server is restarted, these tasks will
// reset because they only exist in memory.

const tasks = [
    {
        id: 1,
        title: "Learn Express",
        done: false
    },
    {
        id: 2,
        title: "Build a CRUD API",
        done: false
    },
    {
        id: 3,
        title: "Test the API",
        done: false
    }
];


// --------------------------------------------------
// GET /
// --------------------------------------------------
// Returns basic information about our API.

app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
});


// --------------------------------------------------
// GET /health
// --------------------------------------------------
// Used to check whether our server is running.

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});


// --------------------------------------------------
// GET /tasks
// --------------------------------------------------
// Returns all the tasks currently stored in memory.

app.get("/tasks", (req, res) => {
    res.json(tasks);
});


// --------------------------------------------------
// GET /tasks/:id
// --------------------------------------------------
// Returns one specific task.
//
// Example:
// GET /tasks/2
//
// Here, "2" is the ID we want to find.

app.get("/tasks/:id", (req, res) => {

    // URL parameters are received as strings.
    // Convert the ID to a number so we can compare it
    // with the numeric IDs in our task list.
    const taskId = Number(req.params.id);

    // Search the tasks array for a matching ID.
    const task = tasks.find((task) => task.id === taskId);

    // If no task was found, return a 404 error.
    if (!task) {
        return res.status(404).json({
            error: `Task ${taskId} not found`
        });
    }

    // If the task exists, return it.
    res.json(task);
});


// --------------------------------------------------
// POST /tasks
// --------------------------------------------------
// Creates a new task.
//
// The client should send:
// {
//     "title": "Buy milk"
// }

app.post("/tasks", (req, res) => {

    // Get the title sent by the client.
    const title = req.body.title;

    // Validate the title before creating the task.
    // The server should never blindly trust data
    // coming from the client.
    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Task title is required"
        });
    }

    // Find the highest existing ID.
    // Then add 1 to create the next ID.
    const newId = tasks.length > 0
        ? Math.max(...tasks.map((task) => task.id)) + 1
        : 1;

    // Create the new task.
    const newTask = {
        id: newId,
        title: title.trim(),
        done: false
    };

    // Add the new task to our in-memory list.
    tasks.push(newTask);

    // 201 means the resource was successfully created.
    res.status(201).json(newTask);
});

// --------------------------------------------------
// Start the server
// --------------------------------------------------

app.listen(PORT, () => {
    console.log(`Task API is running on http://localhost:${PORT}`);
});