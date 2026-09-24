const menuItems = [
  { label: "Dashboard", icon: "▦" },
  { label: "Users", icon: "◉" },
  { label: "Orders", icon: "□" },
  { label: "Revenue", icon: "₹" },
  { label: "Analytics", icon: "⌁" },
  { label: "Settings", icon: "⚙" }
];

function Sidebar({ activeItem, setActiveItem, sidebarOpen, setSidebarOpen }) {
  const handleClick = (item) => {
    setActiveItem(item);
    setSidebarOpen(false);
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="brand">
        <div className="brand-mark">A</div>
        <div>
          <strong>ALGORYX</strong>
          <span>Admin Suite</span>
        </div>
      </div>

      <div className="sidebar-section-label">MAIN MENU</div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${activeItem === item.label ? "active" : ""}`}
            onClick={() => handleClick(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <span className="upgrade-badge">PRO</span>
          <strong>Build faster</strong>
          <p>Keep your workspace organized and productive.</p>
          <button>View workspace</button>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">AK</div>
          <div>
            <strong>Aadithyan</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;