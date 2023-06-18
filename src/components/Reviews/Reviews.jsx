import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/apiService";

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
      : <p>We don't have any reviews for this movie</p>
  );
};
