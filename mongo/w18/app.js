const express = require("express");
const mongoose = require("mongoose");
const songRoutes = require("./routes/songRoute");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


mongoose
  .connect("mongodb://127.0.0.1:27017/music")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
// .catch(err => console.error("DB connection error:", err));

app.use("/", songRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
