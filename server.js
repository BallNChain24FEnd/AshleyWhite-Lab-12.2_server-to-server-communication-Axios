// Import Express
const express = require("express");

// Create our Express application
const app = express();

// Set the server port to 3010
const port = 3010;

// Create a test route
app.get("/", (req, res) => {
  res.send("Welcome to The Daily Grind API!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
