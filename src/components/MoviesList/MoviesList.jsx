import { Link } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.length !== 0 && (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};