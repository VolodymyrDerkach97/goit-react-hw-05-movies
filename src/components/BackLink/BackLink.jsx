import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
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
  children: PropTypes.string,
};
