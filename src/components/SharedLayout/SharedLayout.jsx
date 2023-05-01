import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
