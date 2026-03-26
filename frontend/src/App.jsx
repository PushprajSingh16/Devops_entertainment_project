import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://52.91.78.15:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Entertainment App</h1>
        <p className="subtitle">Dockerized DevOps Project</p>
      </header>

      <section className="movies-section">
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h2 className="movie-title">{movie.name}</h2>
              <p className="movie-rating">⭐ 8.0/10</p>
              <p className="movie-description">Sample description</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;