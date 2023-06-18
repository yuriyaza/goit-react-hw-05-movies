import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import css from './MoviesList.module.css'
  
  

export const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.length !== 0 && (
        <ul className={css.moviesList}>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <span className={css.icon}><BiCameraMovie/></span>
                <Link to={`/movies/${id}/cast`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
