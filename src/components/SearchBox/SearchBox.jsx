import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <input type="text" value={query} onChange={handleChange} />
        <button>Search</button>
      </form>
      <div></div>
    </>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
