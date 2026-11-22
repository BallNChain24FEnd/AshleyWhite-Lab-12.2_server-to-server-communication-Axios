// Import Express and Axios
const express = require("express");
const axios = require("axios");

// Create our Express application
const app = express();

// Set the server port
const port = 3010;

// Create a test route
app.get("/", (req, res) => {
  res.send("Welcome to The Daily Grind API!");
});

// Get a random fun fact
app.get("/api/fun-fact", async (req, res) => {
  // Request a fact from the external API
  const response = await axios.get(
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );

  // Temporarily return the full API response data
  res.json(response.data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
