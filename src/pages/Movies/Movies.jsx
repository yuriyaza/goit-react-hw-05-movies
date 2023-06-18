import { useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import * as API from "../../services/apiService";
import { Notify } from "notiflix";

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

export const Movies = () => {
  const [query, setQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  function onInputChange(e) {
    setQuery(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (query === '') return;
    const response = await API.searchMovies(query);
    
    setMoviesList(response.data.results);
    if (response.data.results.length === 0) Notify.failure("Movies not found");
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={query} onChange={onInputChange} />
        <button type="submit">Пошук</button>
      </form>

      <MoviesList movies={moviesList} />
    </>
  );
};
