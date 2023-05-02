import { Outlet, useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import api from '../../services';
import { useState } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  // const visibleMovies = searchMovies.filter(movie =>
  //   movie.original_title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const handleSubmit = async () => {
    try {
      const res = await api.fetchSearchsMovie(searchQuery);
      setSearchMovies(res.data.results);
      console.log(res.data.results);
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
      <MovieList movies={searchMovies} />
      <Outlet />
    </>
  );
};

export default Movies;
