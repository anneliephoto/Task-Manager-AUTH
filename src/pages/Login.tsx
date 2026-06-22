import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Task Manager</h1>
        <p>Organize your tasks and boost your productivity</p>

        {!isAuthenticated ? (
          <>
            <p style={{ marginBottom: "2rem", color: "var(--text-secondary)" }}>
              Sign in to get started
            </p>
            <button
              onClick={() => loginWithRedirect()}
              className="btn btn-primary"
              style={{ width: "100%", padding: "12px" }}
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <p style={{ marginBottom: "1rem" }}>Welcome back, {user?.name}!</p>
            <button
              onClick={() => logout()}
              className="btn btn-secondary"
              style={{ width: "100%", padding: "12px" }}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
