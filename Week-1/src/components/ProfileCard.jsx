function ProfileCard() {
  return (
    <section className="panel profile-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ACCOUNT</p>
          <h2>User Profile</h2>
        </div>
        <button className="text-button">Edit</button>
      </div>

      <div className="profile-main">
        <div className="profile-avatar">AK</div>
        <div>
          <h3>Aadithyan K</h3>
          <p>CSE Student</p>
          <span className="profile-status">● Active now</span>
        </div>
      </div>

      <div className="profile-details">
        <div>
          <span>Email</span>
          <strong>aadi@gmail.com</strong>
        </div>
        <div>
          <span>Role</span>
          <strong>Administrator</strong>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;