import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import * as API from "../../services/api";
import css from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { title, poster_path, overview, genres} = movie;

  useEffect(() => {
    async function getData() {
      const response = await API.getMovieDetails(movieId);
      setMovie(response.data);
    }
    getData();
  }, [movieId]);

  return (
    <>
      {poster_path && (
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
      )}
      <h2>{title}</h2>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres && genres.map((genre) => genre.name).join(", ")}</p>

      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Outlet />
    </>
  );
};
