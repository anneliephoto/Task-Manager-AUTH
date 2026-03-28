import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <h1>Login Page</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <>
          <p>Welcome {user?.name}</p>
          <button onClick={() => logout()}>Log Out</button>
        </>
      )}
    </div>
  );
}
