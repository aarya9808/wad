const express = require("express");
const fs = require("fs");
const app = express();

// Serve static files (HTML)
app.use(express.static("public"));

// Endpoint to send user data
app.get("/users", (req, res) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    // if (err) return res.status(500).send("Error reading file");
    res.json(JSON.parse(data));
  });
});

app.listen(9000, () => {
  console.log("Server running on http://localhost:9000");
});
