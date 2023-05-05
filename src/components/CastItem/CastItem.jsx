import PropTypes from 'prop-types';

const CastItem = ({ name, profile_path }) => {
  return (
    <li>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : ''
        }
        alt={`actor ${name}`}
        width="70px"
        height="90px"
      />
      {name}
    </li>
  );
};
export default CastItem;
CastItem.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string,
};
