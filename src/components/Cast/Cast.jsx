import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services';

const Cast = () => {
  const [castMovie, setCastMovie] = useState([]);
  const {
    current: { movieId },
  } = useRef(useParams('movieId'));

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.fetchCastMovie(movieId);
      setCastMovie(res.data.cast);
      console.log(res.data.cast);
    };
    fetchData();
  }, [movieId]);
  return (
    <div>
      Cast
      <ul>
        {castMovie ? (
          castMovie.map(({ id, name, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : ''
                }
                alt={`actor ${name}`}
                width="70px"
                height="90px"
              />
              {name}
            </li>
          ))
        ) : (
          <li>Loading</li>
        )}
      </ul>
    </div>
  );
};
export default Cast;
