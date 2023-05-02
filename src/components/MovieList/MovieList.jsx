import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.name}
            <Link to={movie.id}>{movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MovieList;
