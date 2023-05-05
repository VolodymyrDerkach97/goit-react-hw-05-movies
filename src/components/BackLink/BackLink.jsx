import PropTypes from 'prop-types';
import { StyledHomeItem } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return <StyledHomeItem to={to}>{children}</StyledHomeItem>;
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.shape({
      hash: PropTypes.string,
      key: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  }),
  children: PropTypes.array,
};
