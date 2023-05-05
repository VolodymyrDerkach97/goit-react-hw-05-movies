import { useEffect, useRef, useState, lazy } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import api from '../../services';
import dateFormat from 'dateformat';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IconContext } from 'react-icons';

import {
  WraperMovie,
  StyledNavLink,
  StyledTitleMovie,
  StyledUserScore,
  StyledOverview,
  StyledOverviewText,
  StyledGenres,
  StyledGenresList,
  StyledAdditionalLink,
  StyledAdditionalItem,
} from './MovieDetails.styled';

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

  const { title, release_date, overview, genres, poster_path, vote_average } =
    movie;

  return (
    <div>
      <IconContext.Provider value={{ size: '25px' }}>
        <BackLink to={backLink.current}>
          {<IoIosArrowRoundBack />}Go back
        </BackLink>
      </IconContext.Provider>

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
              width="250px"
              height="375px"
            />
            <div>
              <StyledTitleMovie>
                {title} ({dateFormat(release_date, 'yyyy')})
              </StyledTitleMovie>
              <StyledUserScore>
                User score: {Math.round(vote_average * 10)}%
              </StyledUserScore>
              <StyledOverview>Overview</StyledOverview>
              <StyledOverviewText>{overview}</StyledOverviewText>
              <StyledGenres>Genres</StyledGenres>
              <StyledGenresList>
                {genres ? (
                  genres.map(g => <li key={g.id}>{g.name}</li>)
                ) : (
                  <li>Not Genres</li>
                )}
              </StyledGenresList>
            </div>
          </WraperMovie>

          <StyledAdditionalLink>
            <StyledAdditionalItem>
              <h4>Addinational information</h4>
            </StyledAdditionalItem>
            <StyledAdditionalItem>
              <StyledNavLink to="cast">Cast</StyledNavLink>
            </StyledAdditionalItem>
            <StyledAdditionalItem>
              <StyledNavLink to="review">Review</StyledNavLink>
            </StyledAdditionalItem>
          </StyledAdditionalLink>
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MovieDetails;
