import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Notify } from "notiflix";
import { BiSearchAlt } from "react-icons/bi";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Spinner } from "components/Spinner/Spinner";
import * as api from "../../services/apiService";
import css from "./Movies.module.css";

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

export const Movies = () => {
  const [urlParams, setUrlParams] = useSearchParams({});
  const [query, setQuery] = useState(
    urlParams.get("search") ? urlParams.get("search") : ""
  );
  const [moviesList, setMoviesList] = useState([]);

  const [showSpinner, setShowSpinner] = useState(false);
  // const a = searchParams.get("search");

  async function getData() {
    // const a = urlParams.get("search");
    // console.log(a);
    // console.log(moviesList);
    try {
      if (query === "") return;
      setShowSpinner(true);
      const response = await api.searchMovies(query);
      setMoviesList(response.data.results);
      if (response.data.results.length === 0)
        Notify.failure("Movies not found");
      setUrlParams(query !== "" ? { search: query } : {});
    } finally {
      setShowSpinner(false);
    }
  }

  function onInputChange(e) {
    setQuery(e.target.value);
    // setSearchParams({ search: e.target.value });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    getData();
  }

  // useEffect(() => {
  //   setQuery((query) => {
  //     return urlParams.get("search");
  //   });
  //   // console.log(query);
  // }, [urlParams]);

  useEffect(() => {
    async function getData() {
      try {
        // if (query === "") return;
        setShowSpinner(true);
        const response = await api.searchMovies(urlParams.get("search"));
        setMoviesList(response.data.results);
        if (response.data.results.length === 0)
          Notify.failure("Movies not found");
        // setUrlParams(query !== "" ? { search: query } : {});
      } finally {
        setShowSpinner(false);
      }
    }

    getData();
  }, [urlParams]);

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
      {showSpinner && <Spinner />}
    </>
  );
};
