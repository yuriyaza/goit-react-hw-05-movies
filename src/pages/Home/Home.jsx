import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as API from "../../services/api";

export const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await API.getTrending();
      setMoviesList(result.data.results);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {moviesList.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
