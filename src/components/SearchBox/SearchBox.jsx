const SearchBox = ({ value, onChange }) => {
  return (
    <form onSubmit={e => {}}>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
