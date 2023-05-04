import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../services';
import HomeList from '../../components/HomeList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      const res = await api.fetchPopularMovies();
      setMovies(res);
    };
    fetch();
  }, []);

  return <HomeList movies={movies} location={location} />;
};

export default Home;
