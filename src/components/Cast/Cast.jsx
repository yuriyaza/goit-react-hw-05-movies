import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/api";
import css from "./Cast.module.css";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await API.getMovieCast(movieId);
      setCast(response.data.cast);
    }
    getData();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <li key={id}>
            {profile_path && (
              <img
                className={css.photo}
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
