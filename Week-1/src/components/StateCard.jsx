function StateCard({ title, value, change, icon }) {
  return (
    <article className="state-card">
      <div className="card-top">
        <span className="card-icon">{icon}</span>
        <span className="change-badge">{change}</span>
      </div>

      <p className="card-title">{title}</p>
      <h3>{value}</h3>
      <p className="card-caption">Compared with last month</p>
    </article>
  );
}

export default StateCard;