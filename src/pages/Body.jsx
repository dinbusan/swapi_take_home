import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Table from "../components/Table";
import Details from "./Detail";
import { fetchCharacterData } from "../components/Api";

const Body = () => {
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


  return (
    <>
      {loading ? (
        <>
          <div className="animate-bounce my-40 flex font-mono text-3xl justify-center">
            <p>Loading... May take up to 1 minute...</p>
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default Body;
