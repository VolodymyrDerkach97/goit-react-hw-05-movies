import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services';

const Review = () => {
  const [reviewMovie, setreviewMovie] = useState([]);
  const {
    current: { movieId },
  } = useRef(useParams('movieId'));

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.fetchReviewsMovie(movieId);
      setreviewMovie(res.data.results);
    };
    fetchData();
  }, [movieId]);

  console.log('reviewMovie-', reviewMovie);
  return (
    <div>
      Review
      {reviewMovie ? (
        <ul>
          {reviewMovie.map(({ id, author, content }) => (
            <li key={id}>
              <b> {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Review;
