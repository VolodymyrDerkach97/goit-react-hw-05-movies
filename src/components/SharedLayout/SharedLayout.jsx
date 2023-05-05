import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { StyledLink, StyleHeader, StyleNav } from './SharedLayout.styled';

import Loading from '../Loading';

const SharedLayout = () => {
  return (
    <div>
      <StyleHeader>
        <StyleNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyleNav>
      </StyleHeader>
      <Suspense fallback={<Loading />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
