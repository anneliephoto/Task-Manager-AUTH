import { Auth0Provider } from "@auth0/auth0-react";

export const AuthProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Auth0Provider
      domain="dev-v6rqw0sm8ri4r08s.us.auth0.com"
      clientId="9N0SeVebQ5Dm20TN0EMhSA2sq7BjPpXO"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
