const express = require("express");
const app = express();
const fs = require("fs");

// Serve static files from 'public' folder (like index.html)
app.use(express.static("public"));

// API route to send employee data
app.get("/emps", (req, res) => {
  fs.readFile("emp.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Internal Server Error");
    }
    res.json(JSON.parse(data)); // Convert file text to JSON and send
  });
});

// Start server
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
