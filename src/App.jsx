import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const App = () => {
  return (
   
      <div>
        <h1 className="text-4xl text-red-400">Star Wars Characters</h1>
        <LoginButton />
        <LogoutButton />
      </div>
  
  );
};

export default App;
