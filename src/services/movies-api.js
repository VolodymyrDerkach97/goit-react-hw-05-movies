import axios from 'axios';

const KEY = '7a21556e7ca52007c7eb72954b0c8ac0';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const param = new URLSearchParams({
  api_key: KEY,
  language: 'en - US',
});

const fetchPopularMovies = async () => {
  try {
    const res = await axios.get(`trending/movie/week?${param}`);
    // console.log(res);
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
const api = {
  fetchPopularMovies,
  fetchInfoMovie,
};

export default api;

// https://api.themoviedb.org/3/movie/{movie_id}
