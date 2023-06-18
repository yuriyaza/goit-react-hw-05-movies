import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import * as API from "../../services/apiService";
import css from './Home.module.css'

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function getData() {
        const result = await API.getTrending();
        setMoviesList(result.data.results);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className={css.header}>Trending movies</h1>
      <MoviesList movies={moviesList} />
    </>
  );
};
