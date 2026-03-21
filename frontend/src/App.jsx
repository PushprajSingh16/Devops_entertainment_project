function App() {
  const movies = [
    { title: "The Adventure", rating: "8.2" },
    { title: "Space Journey", rating: "7.9" },
    { title: "Comedy Night", rating: "8.5" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎬 Entertainment App</h1>
      <p>DevOps Project UI</p>

      {movies.map((m, i) => (
        <div key={i} className="card">
          <h2>{m.title}</h2>
          <p>⭐ {m.rating}/10</p>
        </div>
      ))}
    </div>
  );
}

export default App;