import { useLocation } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

import api from '../../services';
import HomeList from '../../components/HomeList';
// import Error from '../../components/Error';
const Error = lazy(() => import('../../components/Error'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      try {
        const res = await api.fetchPopularMovies();
        setMovies(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {error ? <Error message={error} /> : ''}
      <HomeList isLoading={isLoading} movies={movies} location={location} />
    </>
  );
};

export default Home;
