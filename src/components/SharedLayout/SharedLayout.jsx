import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import Loading from '../Loading';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: red;
  }
`;
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
