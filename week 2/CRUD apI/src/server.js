// Import the Express framework.
// Express helps us create a web server and define API endpoints.
const express = require("express");

// Create an Express application.
// The "app" object will be used to configure our server.
const app = express();

// Port where our server will listen for requests.
const PORT = 3000;


// --------------------------------------------------
// GET /
// --------------------------------------------------
// This is the main/root endpoint of our API.
// It gives basic information about what our API provides.

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
// This endpoint is used to check whether our server
// is running correctly.

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});


// Start the server.
// Once the server starts successfully, this message will appear
// in the terminal.
app.listen(PORT, () => {
    console.log(`Task API is running on http://localhost:${PORT}`);
});