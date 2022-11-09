import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const AUTH_KEY = '6ea30c0202d94a8a4dcf29367f44a9fc';

export async function popularMovieFetch() {
  const response = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: AUTH_KEY,
      size: 20,
    },
  });
  return response.data.results;
}

export async function fetchMovieByName(query) {
  const response = await axios.get(`/search/movie?query=${query}`, {
    params: {
      api_key: AUTH_KEY,
      size: 20,
    },
  });
  return response.data.results;
}

export async function fetchMovieById(movieId) {
  const response = await axios(`movie/${movieId}`, {
    params: {
      api_key: AUTH_KEY,
    },
  });
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios(`movie/${movieId}/credits`, {
    params: {
      api_key: AUTH_KEY,
    },
  });
  return response.data;
}
export async function fetchMovieReviews(movieId) {
  const response = await axios(`movie/${movieId}/reviews`, {
    params: {
      api_key: AUTH_KEY,
    },
  });
  return response.data;
}
