const getMovies = (req, res) => {
  res.json([
    { id: 1, name: "Avengers" },
    { id: 2, name: "Inception" }
  ]);
};

module.exports = { getMovies };