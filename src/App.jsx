import React from "react";
import Body from "./pages/Body";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const App = () => {
  return (
   
      <div>
        <h1>Star Wars Characters</h1>
        <LoginButton />
        <LogoutButton />
      </div>
  
  );
};

export default App;
