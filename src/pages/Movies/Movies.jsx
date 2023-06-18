import { useState } from "react";
import * as API from "../../services/api";

export const Movies = () => {
  const [query, setQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  function onInputChange(e) {
    setQuery(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await API.searchMovies(query);
    setMoviesList(response.data.results);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={query} onChange={onInputChange} />
      <button type="submit">Пошук</button>
    </form>
  );
};
