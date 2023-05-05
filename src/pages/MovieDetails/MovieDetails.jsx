import { useEffect, useRef, useState, lazy } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import api from '../../services';
import dateFormat from 'dateformat';

import { WraperMovie, StyledNavLink } from './MovieDetails.styled';

import BackLink from 'components/BackLink';
import Loading from 'components/Loading';

const Error = lazy(() => import('../../components/Error'));

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    current: { movieId },
  } = useRef(useParams('movieId'));

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await api.fetchInfoMovie(movieId);
        setMovie(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const { title, release_date, overview, genres, poster_path } = movie;

  return (
    <div>
      <BackLink to={backLink.current}>Go back</BackLink>
      {error ? <Error message={error} /> : ''}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <WraperMovie>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : ''
              }
              alt={`poster for the movie ${title}`}
              width="200px"
              height="300px"
            />
            <div>
              {' '}
              <h2>
                {title}({dateFormat(release_date, 'yyyy')})
              </h2>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres ? (
                  genres.map(g => <li key={g.id}>{g.name}</li>)
                ) : (
                  <li>Not Genres</li>
                )}
              </ul>
            </div>
          </WraperMovie>

          <ul>
            <li>
              <StyledNavLink to="cast">Cast</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="review">Review</StyledNavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MovieDetails;
