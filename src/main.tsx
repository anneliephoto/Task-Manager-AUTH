import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-v6rqw0sm8ri4r08s.us.auth0.com"
    clientId="9N0SeVebQ5Dm20TN0EMhSA2sq7BjPpXO"
    authorizationParams={{
      redirect_uri: `${window.location.origin}${import.meta.env.BASE_URL}`,
    }}
  >
    <App />
  </Auth0Provider>,
);

