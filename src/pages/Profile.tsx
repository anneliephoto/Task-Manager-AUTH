import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="app-container">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="app-container">
        <p>Please log in</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>User Profile</h1>

      <div className="profile-card" style={{ marginTop: "2rem" }}>
        {user?.picture && (
          <img
            src={user.picture}
            alt="Profile"
            className="profile-avatar"
          />
        )}

        <div className="profile-info">
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          {user?.email_verified && (
            <p style={{ color: "var(--success)", fontSize: "0.9rem", marginTop: "1rem" }}>
              Email Verified
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
