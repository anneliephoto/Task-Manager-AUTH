import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please log in</p>;

  return (
    <div>
      <h1>User Profile</h1>

      <img
        src={user?.picture}
        alt="Profile"
        style={{ width: "100px", borderRadius: "50%" }}
      />

      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
