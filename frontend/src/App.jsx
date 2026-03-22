import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://54.164.131.38:5000/api/movies")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((movie) => ({
          title: movie.name,
          rating: "8.0",
          description: "Sample description"
        }));
        setMovies(formatted);
      })
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