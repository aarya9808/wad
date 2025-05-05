import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Setup for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(__dirname));

// Routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "register.html"))
);
app.get("/users", (req, res) =>
  res.sendFile(path.join(__dirname, "users.html"))
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
