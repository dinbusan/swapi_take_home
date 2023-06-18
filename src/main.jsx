import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8e3pz8xumh0betx5.us.auth0.com"
      clientId="vMZBmQM4Kuqnfcd0bQGKw8dPKzFS3pLt"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
