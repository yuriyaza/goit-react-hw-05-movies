import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import * as api from "../../services/apiService";
import css from "./Home.module.css";

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await api.getTrending();
      setMoviesList(result.data.results);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending movies</h1>
      <MoviesList movies={moviesList} />
    </>
  );
};
