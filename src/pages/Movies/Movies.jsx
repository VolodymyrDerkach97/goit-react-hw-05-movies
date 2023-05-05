import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  lazy,
  Suspense,
} from 'react';

import api from '../../services';

import Loading from '../../components/Loading';

const Error = lazy(() => import('../../components/Error'));

const SearchBox = lazy(() => import('components/SearchBox'));
const MovieList = lazy(() => import('components/MovieList'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  const firstLoadQuery = useRef(searchQuery);

  const handleFetchMovies = useCallback(async query => {
    setIsLoading(true);
    try {
      const res = await api.fetchSearchsMovie(query);
      setSearchMovies(res.data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (firstLoadQuery.current === '') {
      setIsLoading(false);
      return;
    }
    if (firstLoadQuery.current === searchQuery) {
      handleFetchMovies(firstLoadQuery.current);
    }
    setIsLoading(false);
  }, [handleFetchMovies, searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = query => {
    if (query.trim() === '') {
      console.log('заповни поле');
      return;
    }
    updateQueryString(query);
    handleFetchMovies(query);
  };

  return (
    <>
      {error ? <Error message={error} /> : ''}

      <Suspense fallback={<Loading />}>
        <SearchBox onSubmit={handleSubmit} />
        <MovieList
          isLoading={isLoading}
          movies={searchMovies}
          location={location}
        />
      </Suspense>

      <Outlet />
    </>
  );
};

export default Movies;
