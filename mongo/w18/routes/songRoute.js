const express = require("express");
const router = express.Router();
const Song = require("../models/Song");

// (c) Insert 5 songs
router.get("/seed", async (req, res) => {
  await Song.deleteMany({});
  const songs = [
    { Songname: "ABC", Film: "DEF", Music_director: "GHI", Singer: "JKL" },
    { Songname: "Song2", Film: "Film2", Music_director: "GHI", Singer: "JKL" },
    { Songname: "Song3", Film: "Film3", Music_director: "XYZ", Singer: "ABC" },
    { Songname: "Song4", Film: "Film4", Music_director: "XYZ", Singer: "JKL" },
    { Songname: "Song5", Film: "Film5", Music_director: "GHI", Singer: "MNO" },
  ];
  await Song.insertMany(songs);
  res.send("Seeded successfully");
});

// (d) Total count and list
router.get("/", async (req, res) => {
  const songs = await Song.find();
  const count = await Song.countDocuments();
  res.render("index", { songs, count });
});

// (e) Filter by Music Director
router.get("/director/:name", async (req, res) => {
  const songs = await Song.find({ Music_director: req.params.name });
  res.json(songs);
});

// (f) Filter by Music Director and Singer
router.get("/director/:name/singer/:singer", async (req, res) => {
  const songs = await Song.find({
    Music_director: req.params.name,
    Singer: req.params.singer,
  });
  res.json(songs);
});

// (g) Delete by song name
router.delete("/delete/:songname", async (req, res) => {
  await Song.deleteOne({ Songname: req.params.songname });
  res.send("Deleted");
});

// (h) Add new favorite song
router.post("/add", async (req, res) => {
  const newSong = new Song(req.body);
  await newSong.save();
  res.send("Song Added");
});

// (i) Songs by singer from specific film
router.get("/film/:film/singer/:singer", async (req, res) => {
  const songs = await Song.find({
    Film: req.params.film,
    Singer: req.params.singer,
  });
  res.json(songs);
});

// (j) Update with actor and actress
router.put("/update/:songname", async (req, res) => {
  await Song.updateOne(
    { Songname: req.params.songname },
    { $set: { Actor: req.body.Actor, Actress: req.body.Actress } }
  );
  res.send("Updated");
});

module.exports = router;
