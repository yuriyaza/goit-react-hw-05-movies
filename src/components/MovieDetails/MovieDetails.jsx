import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import * as API from "../../services/apiService";
import css from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { title, poster_path, overview, genres, release_date, vote_average } =
    movie;
  const releaseDate = new Date(release_date).getFullYear();

  useEffect(() => {
    async function getData() {
      const response = await API.getMovieDetails(movieId);
      setMovie(response.data);
    }
    getData();
  }, [movieId]);

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.poster}>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
            />
          )}
        </div>
        <div className={css.details}>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p className={css.description}>User Score: {vote_average} </p>
          <h3>Overview</h3>
          <p className={css.description}>{overview}</p>
          <h3>Genres</h3>
          <p className={css.description}>
            {genres && genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <div className={css.tabs}>
        <NavLink className={css.temp} to="cast">
          Cast
        </NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
};
