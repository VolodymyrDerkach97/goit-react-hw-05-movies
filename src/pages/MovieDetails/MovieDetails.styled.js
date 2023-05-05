import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WraperMovie = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  margin-bottom: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: red;
  }
`;
export const StyledTitleMovie = styled.h2`
  margin-bottom: 20px;
`;
export const StyledUserScore = styled.p`
  margin-bottom: 20px;
`;
export const StyledOverview = styled.h3`
  margin-bottom: 20px;
`;
export const StyledOverviewText = styled.p`
  margin-bottom: 20px;
`;
export const StyledGenres = styled.h3`
  margin-bottom: 20px;
`;
export const StyledGenresList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  margin-bottom: 20px;
`;
export const StyledAdditionalLink = styled.ul`
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  margin-bottom: 20px;
`;
export const StyledAdditionalItem = styled.li`
  margin-bottom: 10px;
`;
