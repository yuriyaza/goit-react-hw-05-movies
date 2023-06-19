import { useState } from "react";
import { Notify } from "notiflix";
import { BiSearchAlt } from "react-icons/bi";
import { MoviesList } from "components/MoviesList/MoviesList";
import * as api from "../../services/apiService";
import css from "./Movies.module.css";

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

export const Movies = () => {
  const [query, setQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  function onInputChange(e) {
    setQuery(e.target.value);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    const response = await api.searchMovies(query);

    setMoviesList(response.data.results);
    if (response.data.results.length === 0) Notify.failure("Movies not found");
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={onInputChange}
        />
        <button className={css.searchButton} type="submit">
          <BiSearchAlt size={20} color={"#ffffff"} />
        </button>
      </form>

      <MoviesList movies={moviesList} />
    </>
  );
};
