import React, { useState, useEffect } from "react";
import Table from "../Table";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/");
      const jsonData = await response.json();
      setData(jsonData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <Table data={data} />
    </div>
  );
}

export default MyComponent;
