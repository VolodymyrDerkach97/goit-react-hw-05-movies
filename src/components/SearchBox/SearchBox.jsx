const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
          console.log('submit');
        }}
      >
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div></div>
    </>
  );
};

export default SearchBox;
