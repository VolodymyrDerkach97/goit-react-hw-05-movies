import BackLink from 'components/BackLink/BackLink';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../../services';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const movieId = useRef(useParams('movieId'));
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetch = async () => {
      const res = await api.fetchInfoMovie(movieId.current.movieId);
      console.log(res);

      setMovie(prev => ({ ...prev, ...res }));
    };
    fetch();
  }, [movieId]);

  const { original_title, release_date, overview, genres } = movie;
  return (
    <div>
      <BackLink to={backLink}>Go back</BackLink>
      <ul>
        <div>
          <img src="" alt="" />
          <h2>
            {original_title}({release_date})
          </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            <ul>
              {genres.map(({ name }) => (
                <li>{name}</li>
              ))}
            </ul>
          </p>
        </div>
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
