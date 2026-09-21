import { useState } from "react";
import "./App.css";

import Header from "./components/layout/header";
import MovieGrid from "./components/movies/movie-grid";
import Pagination from "./components/movies/pagination";
import { movies as initialMovies } from "./data/movies";

export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleToggleBookmark(movieId: number) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie,
      ),
    );
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <h1 className="page-title">영화 목록</h1>

        <MovieGrid
          movies={movies}
          onToggleBookmark={handleToggleBookmark}
        />
      </main>

      <footer className="footer">
        <Pagination />

        <div className="tmdb-notice">
          <img src="/images/logos/tmdb-logo.svg" alt="TMDB" />
          <span>
            This product uses the TMDB API but is not endorsed or certified by{" "}
            <u>TMDB</u>.
          </span>
        </div>
      </footer>
    </div>
  );
}