import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import { StyledHomeItem } from './HomeList.styled';
import Loading from '../Loading';

const HomeList = ({ isLoading, movies, location }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {movies.map(({ id, title, release_date }) => (
            <StyledHomeItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}({dateFormat(release_date, 'yyyy')})
              </Link>
            </StyledHomeItem>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomeList;

HomeList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.shape({
      hash: PropTypes.string,
      key: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  }),
};
