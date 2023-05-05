import { useEffect, useState, useRef, lazy } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services';
import Loading from '../Loading';
import CastItem from '../CastItem';

import { SryledCastList } from './Cast.styled';

const Error = lazy(() => import('../../components/Error'));

const Cast = () => {
  const [castMovie, setCastMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    current: { movieId },
  } = useRef(useParams('movieId'));

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await api.fetchCastMovie(movieId);
        setCastMovie(res.data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {error ? <Error message={error} /> : ''}
      {isLoading ? (
        <Loading />
      ) : (
        <SryledCastList>
          {castMovie.length === 0 ? (
            <li>We don't have a cast for this movie..</li>
          ) : (
            castMovie.map(props => <CastItem key={props.id} {...props} />)
          )}
        </SryledCastList>
      )}
    </div>
  );
};
export default Cast;
