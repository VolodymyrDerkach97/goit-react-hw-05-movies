import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.movieId}>
            <Link to={movie.movieId}>{movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieList;
