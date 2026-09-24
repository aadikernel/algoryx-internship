const notifications = [
  { id: 1, title: "New user registered", time: "5 min ago", icon: "U" },
  { id: 2, title: "Order #1024 completed", time: "18 min ago", icon: "✓" },
  { id: 3, title: "New message received", time: "42 min ago", icon: "M" }
];

function Notifications() {
  return (
    <section className="panel notifications-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ACTIVITY</p>
          <h2>Notifications</h2>
        </div>
        <span className="count-badge">{notifications.length}</span>
      </div>

      <div className="notification-list">
        {notifications.map((notification) => (
          <article className="notification-item" key={notification.id}>
            <span className="notification-icon">{notification.icon}</span>
            <div>
              <strong>{notification.title}</strong>
              <span>{notification.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Notifications;