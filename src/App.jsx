import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./pages/Body";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Star Wars Characters</h1>
        <Body />
      </div>
    </Router>
  );
};

export default App;
