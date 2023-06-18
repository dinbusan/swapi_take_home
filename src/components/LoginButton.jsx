import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <div className="justify-center flex">
        <button
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          onClick={() => loginWithRedirect()}
        >
          <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Log In
          </span>
        </button>
      </div>
    );
  }
};

export default LoginButton;
