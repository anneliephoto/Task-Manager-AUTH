import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
      }}
    >
      <Link to="/">Dashboard</Link>
      <Link to="/create">Create Task</Link>
      <Link to="/profile">Profile</Link>
      <span style={{ marginLeft: "auto" }}>
        {user?.email}
        <button
          style={{ marginLeft: 16 }}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </span>
    </nav>
  );
}
