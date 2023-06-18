import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Body from "../pages/Body";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <button
          className="btn btn-primary
                    mx-5 my-5 px-4 logoutBtn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
        <br />
        <Body />
      </>
    );
  }
};

export default LogoutButton;
