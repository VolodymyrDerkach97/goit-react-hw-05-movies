import PropTypes from 'prop-types';

const ReviewItem = ({ author, content }) => {
  return (
    <>
      <li>
        <b> {author}</b>
        <p>{content}</p>
      </li>
    </>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
