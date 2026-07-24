export const addMovie = (movie) =>
  fetch('http://localhost:8000/save/', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }).then(res => res.json());

export const getMovies = () => fetch('http://localhost:8000/select/').then(res => res.json());

export const deleteMovie = (movie_title) =>
  fetch(`http://localhost:8000/delete/${movie_title}`, { method: "DELETE" });

export const updateMovie = (movie_title, updates) =>
  fetch(`http://localhost:8000/update/${movie_title}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then(res => res.json());