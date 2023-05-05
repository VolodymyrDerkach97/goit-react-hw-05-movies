import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import Loading from '../Loading';
import { StyledMovieItem } from './MovieList.styled';

const MovieList = ({ isLoading, movies }) => {
  const location = useLocation();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {movies.map(({ id, title, release_date }) => (
            <StyledMovieItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}({dateFormat(release_date, 'yyyy')})
              </Link>
            </StyledMovieItem>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};
