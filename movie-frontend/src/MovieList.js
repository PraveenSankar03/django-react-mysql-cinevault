import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "./api";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import "./App.css"

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [editingTitle, setEditingTitle] = useState(null);

  const loadMovies = () => {
    getMovies().then(setMovies);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleDelete = async (title) => {
    await deleteMovie(title);
    loadMovies();
  };

  return (
    <div>
      <h2>My Movie Collection</h2>
      <AddMovie onAdded={loadMovies} />
      {movies.map((movie) =>
        editingTitle === movie.movie_title ? (
          <EditMovie
            key={movie.id}
            movie={movie}
            onDone={() => {
              setEditingTitle(null);
              loadMovies();
            }}
          />
        ) : (
          <div key={movie.id} className="movie-card">
            <h3>{movie.movie_title}</h3>
            <p>{movie.movie_director} • {movie.movie_genre} • {movie.movie_year}</p>
            <div>
              <button onClick={() => setEditingTitle(movie.movie_title)}>Edit</button>
              <button onClick={() => handleDelete(movie.movie_title)}>Delete</button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default MovieList;