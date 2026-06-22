import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create Task</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="nav-user">
          <span>{user?.email}</span>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}
