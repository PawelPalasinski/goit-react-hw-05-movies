import axios from 'axios';
import { BASE_URL, API_KEY } from './../utils/utils';

// Trending movies
const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}trending/movie/day?${API_KEY}`);

  const trendingMovies = res.data.results.map(({ id, title, poster_path }) => {
    return { id, title, poster_path };
  });
  return trendingMovies;
};

// Search by id
const getById = async id => {
  const resById = await axios.get(`${BASE_URL}movie/${id}?${API_KEY}`);
  return resById.data;
};

//Movie review by id
const getReviews = async id => {
  const resReviews = await axios.get(
    `${BASE_URL}movie/${id}/reviews?${API_KEY}`
  );
  const reviews = resReviews.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
  return reviews;
};

//Cast review by id
const getCasts = async id => {
  const resCasts = await axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}`);
  return resCasts.data;
};

//Movie review by name/query
const getByQuery = async query => {
  const resByQuery = await axios.get(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return resByQuery.data.results;
};

export { getMovies, getById, getReviews, getCasts, getByQuery };
