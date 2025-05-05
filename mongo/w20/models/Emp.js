const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: String,
  dept: String,
  desgn: String,
  salary: Number,
  joining_date: date,
});

module.exports = mongoose.model("Employee", empSchema);
