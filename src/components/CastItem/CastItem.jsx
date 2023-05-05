import PropTypes from 'prop-types';
import { SryledCastItem, SryledCastName } from './CastItem.styled';
const CastItem = ({ name, profile_path }) => {
  return (
    <SryledCastItem>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : ''
        }
        alt={`actor ${name}`}
        width="100px"
        height="150"
      />
      <SryledCastName>{name}</SryledCastName>
    </SryledCastItem>
  );
};
export default CastItem;
CastItem.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string,
};
