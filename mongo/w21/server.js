const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/bookRoutes");


const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes);

mongoose
  .connect(`mongodb://localhost:27017/book`)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.log(err));
