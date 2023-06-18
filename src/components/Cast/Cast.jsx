import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/apiService";
import css from "./Cast.module.css";
import { DiRedhat } from "react-icons/di";




export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.getMovieCast(movieId);
      setCast(response.data.cast);
    }
    getData();
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <li className={css.castItem} key={id}>
            <div className={css.photo}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={name}
                />
              ) : (
                // <img className={css.photo} src={`${noPhoto}`} alt={name} />
                  <DiRedhat size={100 } />
              )}
            </div>
            <p>{name}</p>
            <p className={css.character}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
