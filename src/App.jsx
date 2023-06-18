import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Body from "./pages/Body";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <div className="flex font-mono justify-between m-5">
        {isAuthenticated ? (
          <h1 className=" text-4xl text-red-400 mx-auto">
            SWAPI API React Assignment
          </h1>
        ) : (
          <h1 className="text-4xl text-red-400 mx-auto my-40">
            SWAPI API React Assignment
          </h1>
        )}{" "}
        <LogoutButton />
      </div>
      <LoginButton />

      {isAuthenticated ? <Body /> : null}
    </div>
  );
};

export default App;
