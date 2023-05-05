import axios from 'axios';

const KEY = '7a21556e7ca52007c7eb72954b0c8ac0';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const param = new URLSearchParams({
  api_key: KEY,
  language: 'en - US',
});

const fetchPopularMovies = async () => {
  try {
    const res = await axios.get(`trending/movie/day?${param}`);
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchInfoMovie = async movie_id => {
  try {
    const res = await axios.get(`movie/${movie_id}?${param}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchCastMovie = async movie_id => {
  try {
    const res = await axios.get(`movie/${movie_id}/credits?${param}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchReviewsMovie = async movie_id => {
  try {
    const res = await axios.get(`movie/${movie_id}/reviews?${param}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchSearchsMovie = async query => {
  try {
    const res = await axios.get(`search/movie?query=${query}&${param}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
const api = {
  fetchPopularMovies,
  fetchInfoMovie,
  fetchCastMovie,
  fetchReviewsMovie,
  fetchSearchsMovie,
};

export default api;
