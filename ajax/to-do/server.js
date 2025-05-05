const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static('public'));

let tasks = []; 

app.get("/tasks", (req, res) => res.json(tasks));

app.post("/tasks", (req, res) => {
  tasks.push(req.body.task); //directy push karna hai req.body.task
  res.sendStatus(200);
});

app.put("/tasks/:i", (req, res) => {
  //const i = parseInt(req.params.i);
  tasks[req.params.i] = req.body.task; //task k array meine edit krna hai directly at that index
  res.sendStatus(200);
});

app.delete("/tasks/:i", (req, res) => {
  //const i = parseInt(req.params.i);
  tasks.splice(req.params.i, 1); //delete k liye splice use krne hai
  res.sendStatus(200);
});

app.listen(3000, () => console.log("✅ http://localhost:3000"));
