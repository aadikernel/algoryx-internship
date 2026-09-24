function Navbar({ search, setSearch, onMenuClick }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="mobile-menu-button" onClick={onMenuClick} aria-label="Open navigation">
          ☰
        </button>
        <div>
          <p className="topbar-label">ADMIN CONSOLE</p>
          <h2>ALGORYX Dashboard</h2>
        </div>
      </div>

      <div className="topbar-actions">
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search orders, users..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search orders and users"
          />
          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </label>

        <button className="icon-button" aria-label="Notifications">
          ♢
          <span className="notification-dot" />
        </button>

        <div className="topbar-avatar">AK</div>
      </div>
    </header>
  );
}

export default Navbar;