import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="anneliedesigns.us.auth0.com"
    clientId="dbFV5djrZeZ4b9iUpIPQ7aFzfVqMZZVg"
    authorizationParams={{
      redirect_uri: `${window.location.origin}${import.meta.env.BASE_URL}`,
    }}
  >
    <App />
  </Auth0Provider>,
);

