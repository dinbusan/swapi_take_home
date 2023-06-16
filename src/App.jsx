import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./Table";
import Details from "./pages/Detail";


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?page=1`
        );
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error("There was an error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <h1>Star Wars Characters</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Routes>
              <Route exact path="/" element={<Table data={data} />}></Route>
              <Route path="/details/:id" element={<Details data={data} />} />
            </Routes>
          </>
        )}
        ;
      </div>
    </Router>
  );
};

export default App;
