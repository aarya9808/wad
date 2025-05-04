const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

let users = [];

app.use(express.static('public'));
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, email } = req.body;
  const exists = users.some(
    (u) => u.username === username || u.email === email
  );
  if (exists) return res.status(400).send("User exists");
  users.push(req.body);
  res.sendStatus(200);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const found = users.find(
    (u) => u.username === username && u.password === password
  );
  if (found) res.json({ message: "Login successful" });
  else res.json({ message: "Invalid credentials" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
