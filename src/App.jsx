import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./Table";
import Details from "./pages/Detail";
import { fetchCharacterData } from "./components/Api";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const characterData = await fetchCharacterData(page);
        setData(characterData);
      } catch (error) {
        console.error("There was an error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  console.log(data);

  return (
    <Router>
      <div>
        <h1>Star Wars Characters</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Table
                    data={data}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                }
              />
              <Route path="/details/:id" element={<Details data={data} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
