import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WraperMovie = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: red;
  }
`;
