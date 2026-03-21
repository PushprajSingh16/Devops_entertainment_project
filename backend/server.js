const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const movies = [
  { id: 1, title: "The Adventure", rating: "8.2" },
  { id: 2, title: "Space Journey", rating: "7.9" },
  { id: 3, title: "Comedy Night", rating: "8.5" }
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});