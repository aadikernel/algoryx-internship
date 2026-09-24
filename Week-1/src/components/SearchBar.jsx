function SearchBar({ search, setSearch }) {
  return (
    <label className="search-box">
      <span aria-hidden="true">⌕</span>
      <input
        type="search"
        placeholder="Search orders, users..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;