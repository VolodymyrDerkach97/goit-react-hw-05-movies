import { Link, useLocation } from 'react-router-dom';
import api from '../../services';
import { useEffect, useState } from 'react';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.fetchPopularMovies();
      setMovies(res);
    };
    fetch();
  }, []);

  const location = useLocation();
  return (
    <>
      <div>Home</div>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
