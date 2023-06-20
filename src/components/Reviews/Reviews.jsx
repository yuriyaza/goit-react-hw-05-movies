import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/apiService";
import css from "./Reviews.module.css";

export const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.getMovieReviews(movieId);
      setReview(response.data.results);
    }
    getData();
  }, [movieId]);

  return review.length > 0 ? (
    <ul className={css.reviewList}>
      {review.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>

            {/* Поле content может содержать встроенную html-разметку, */}
            {/* например <b>выделенный</b> и обычный текст. */}
            {/* Поэтому используем dangerouslySetInnerHTML. */}
            <p className={css.description} dangerouslySetInnerHTML={{ __html: `${content}`, }} />

          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};
