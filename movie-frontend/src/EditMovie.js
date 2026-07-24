import { useState } from "react";
import { updateMovie } from "./api";

function EditMovie({ movie, onDone }) {
  const [form, setForm] = useState({
    movie_title: movie.movie_title,
    movie_director: movie.movie_director,
    movie_genre: movie.movie_genre,
    movie_year: movie.movie_year,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateMovie(movie.movie_title, form); // original title used to find the row
    onDone();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="movie_title" value={form.movie_title} onChange={handleChange} />
      <input name="movie_director" value={form.movie_director} onChange={handleChange} />
      <input name="movie_genre" value={form.movie_genre} onChange={handleChange} />
      <input name="movie_year" value={form.movie_year} onChange={handleChange} />
      <button type="submit">Save</button>
      <button type="button" onClick={onDone}>Cancel</button>
    </form>
  );
}

export default EditMovie;