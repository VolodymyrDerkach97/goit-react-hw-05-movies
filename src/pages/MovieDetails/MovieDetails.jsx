import BackLink from 'components/BackLink/BackLink';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../../services';
import dateFormat from 'dateformat';
import { WraperMovie } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const {
    current: { movieId },
  } = useRef(useParams('movieId'));

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.fetchInfoMovie(movieId);
        setMovie(res);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  const { original_title, release_date, overview, genres, poster_path } = movie;

  return (
    <div>
      <BackLink to={backLink}>Go back</BackLink>
      <ul>
        <WraperMovie>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : ''
            }
            alt={`poster for the movie ${original_title}`}
            width="200px"
            height="300px"
          />
          <div>
            {' '}
            <h2>
              {original_title}({dateFormat(release_date, 'yyyy')})
            </h2>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres ? (
                genres.map(g => <li key={g.id}>{g.name}</li>)
              ) : (
                <li>Loading...</li>
              )}
            </ul>
          </div>
        </WraperMovie>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="review">Review</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
