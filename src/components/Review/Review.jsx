import { useEffect, useState, useRef, lazy } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services';
import Loading from '../Loading';
import ReviewItem from '../ReviewItem';
import { StyledReviewList } from './Review.styled';

const Error = lazy(() => import('../Error'));

const Review = () => {
  const [reviewMovie, setreviewMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    current: { movieId },
  } = useRef(useParams('movieId'));

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await api.fetchReviewsMovie(movieId);
        setreviewMovie(res.data.results);
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
        <StyledReviewList>
          {reviewMovie.length === 0 ? (
            <li>We dont`t have any reviews for this movie.</li>
          ) : (
            reviewMovie.map(props => <ReviewItem key={props.id} {...props} />)
          )}
        </StyledReviewList>
      )}
    </div>
  );
};

export default Review;
