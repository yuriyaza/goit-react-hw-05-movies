import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/api";

export const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await API.getMovieReviews(movieId);
      setReview(response.data.results);
    }
    getData();
  }, [movieId]);

  return (
    <ul>
      {review.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
