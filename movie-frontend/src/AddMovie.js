import { useState } from "react";
import { addMovie } from "./api";

function AddMovie({ onAdded }) {
  const [form, setForm] = useState({
    movie_title: "",
    movie_director: "",
    movie_genre: "",
    movie_year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie(form);
    setForm({ movie_title: "", movie_director: "", movie_genre: "", movie_year: "" });
    onAdded(); // tells parent to refresh the list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="movie_title" placeholder="Title" value={form.movie_title} onChange={handleChange} />
      <input name="movie_director" placeholder="Director" value={form.movie_director} onChange={handleChange} />
      <input name="movie_genre" placeholder="Genre" value={form.movie_genre} onChange={handleChange} />
      <input name="movie_year" placeholder="Year" value={form.movie_year} onChange={handleChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;