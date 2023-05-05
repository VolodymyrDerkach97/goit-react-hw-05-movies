import PropTypes from 'prop-types';
import { TiPencil } from 'react-icons/ti';
import { StyledReviewAuthor, StyledReviewItem } from './ReviewItem.styled';
const ReviewItem = ({ author, content }) => {
  return (
    <>
      <StyledReviewItem>
        <StyledReviewAuthor>
          <TiPencil /> <b>Author: {author}</b>
        </StyledReviewAuthor>
        <p>{content}</p>
      </StyledReviewItem>
    </>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
