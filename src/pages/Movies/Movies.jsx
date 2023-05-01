import { Outlet, useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const visibleMovies = [].filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>Movies</div>

      <SearchBox value={searchQuery} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
      <Outlet />
    </>
  );
};

export default Movies;
