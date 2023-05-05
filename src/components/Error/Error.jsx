import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <div style={{ color: 'red' }}>!!!{message}!!!</div>;
};
export default Error;

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
