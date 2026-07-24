export const deleteMovie = (movie_title) =>
  fetch(`${BASE_URL}/delete/${movie_title}`, {
    method: "DELETE",
  }).then(res => res.json());