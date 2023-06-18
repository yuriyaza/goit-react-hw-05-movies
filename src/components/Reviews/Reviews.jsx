import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/apiService";
import css from './Reviews.module.css'

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
    review.length>0 ?
    <ul className={css.reviewList}>
      {review.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p className={css.description}>{content}</p>
          </li>
        );
      })}
      </ul>
      : <p>We don't have any reviews for this movie</p>
  );
};
