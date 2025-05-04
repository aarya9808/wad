const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

app.get("/employees", (req, res) => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");
    res.send(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
