import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchInput, StyledSearchButton } from './SeachBox.styled';
const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <StyledSearchInput
          placeholder="What movie are we looking for?"
          type="text"
          value={query}
          onChange={handleChange}
        />

        <StyledSearchButton>Search</StyledSearchButton>
      </form>
    </>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
