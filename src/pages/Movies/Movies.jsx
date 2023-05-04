import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import api from '../../services';
import { useEffect, useRef, useState } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);

  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  const firstLoadQuery = useRef(searchQuery);

  useEffect(() => {
    if (firstLoadQuery.current === '') {
      return;
    }
    if (firstLoadQuery.current === searchQuery) {
      featchData();
    }
    async function featchData() {
      try {
        const res = await api.fetchSearchsMovie(firstLoadQuery.current);
        console.log(res);
        setSearchMovies(res.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [searchQuery]);

  const handleSubmit = async () => {
    try {
      const res = await api.fetchSearchsMovie(searchQuery);
      setSearchMovies(res.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>Movies</div>

      <SearchBox
        value={searchQuery}
        onSubmit={handleSubmit}
        onChange={updateQueryString}
      />
      <MovieList movies={searchMovies} location={location} />

      <Outlet />
    </>
  );
};

export default Movies;
