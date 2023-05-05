import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: #212121;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export const StyleHeader = styled.header`
  display: flex;
  background-color: #8cbafe;

  height: 60px;
  margin-bottom: 20px;
  box-shadow: 0px 9px 30px -8px rgba(52, 56, 84, 1);
`;
export const StyleNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-right: auto;
  margin-left: 20px;
`;
