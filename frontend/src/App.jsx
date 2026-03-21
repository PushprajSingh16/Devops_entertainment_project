function App() {
  const movies = [
    { title: "The Adventure", rating: "8.2", description: "An exciting journey through unknown lands filled with thrills and discoveries." },
    { title: "Space Journey", rating: "7.9", description: "A sci-fi adventure exploring the vastness of space and the mysteries of the universe." },
    { title: "Comedy Night", rating: "8.5", description: "A hilarious comedy that will keep you laughing from start to finish." }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Entertainment App</h1>
        <p className="subtitle">Dockerized DevOps Project</p>
      </header>
      <section className="movies-section">
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-rating">⭐ {movie.rating}/10</p>
              <p className="movie-description">{movie.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;