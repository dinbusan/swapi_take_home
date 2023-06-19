import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <button
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <div className="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Log Out
          </span>
        </button>
        <br />
      </>
    );
  }
};

export default LogoutButton;
