const express = require("express");
const mongoose = require("mongoose");
const Student = require("../models/Student");
const app = express();
const router = express.Router();

router.get("/seed", async (req, res) => {
  const marks = [
    {
      name: "Araya",
      roll_no: 2638,
      wad_marks: 44,
      cc_marks: 23,
      dsbda_marks: 32,
      cns_marks: 34,
      ai_marks: 38,
    },
    {
      name: "Araya",
      roll_no: 2638,
      wad_marks: 44,
      cc_marks: 23,
      dsbda_marks: 32,
      cns_marks: 34,
      ai_marks: 38,
    },
    {
      name: "Araya",
      roll_no: 2638,
      wad_marks: 44,
      cc_marks: 23,
      dsbda_marks: 32,
      cns_marks: 34,
      ai_marks: 38,
    },
    {
      name: "Araya",
      roll_no: 2638,
      wad_marks: 44,
      cc_marks: 23,
      dsbda_marks: 32,
      cns_marks: 34,
      ai_marks: 38,
    },
  ];
  await Student.insertMany(marks);
  res.send("Seeded successfully");
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  const count = await Student.countDocuments();
  res.render("index", { students, count });
});

router.get("/marksgt20", async (req, res) => {
  const required = await Student.find({
    dsbda_marks: { $gt: 20 },
  });
  res.json(required);
});

module.exports = router;
