import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjJhZTkwYzA1YjE1NjAwZGNlOTQyODUzZTljMDVlYyIsInN1YiI6IjY0OGNjNTY3YzNjODkxMDEyZDVjZWY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a16iPsTvimiRDA_BdScTTc0a6kzeHOdxxdEjtFmw7IU";

export async function getTrending() {
  return await axios.get(`/trending/movie/week?language=en-US`);
}

export async function searchMovies(query) {
  return await axios.get(`/search/movie?query=${query}&language=en-US&page=1`);
}

export async function getMovieDetails(movie_id) {
  return await axios.get(`/movie/${movie_id}?language=en-US`);
}

export async function getMovieCast(movie_id) {
  return await axios.get(`/movie/${movie_id}/credits?language=en-US`);
}

export async function getMovieReviews(movie_id) {
  return await axios.get(`/movie/${movie_id}/reviews?language=en-US`);
}
