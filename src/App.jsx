import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./Table";
import Details from "./pages/Detail";


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
        const response = await fetch(
          `https://swapi.dev/api/people/?page=${page}`
        );
        const jsonData = await response.json();

        const characterData = await Promise.all(
          jsonData.results.map(async (character) => {
            const filmPromises = character.films.map(async(filmUrl) => {
              const filmResponse = await fetch(filmUrl);
              const filmData = await filmResponse.json();
              return filmData.title;
            });
            const filmTitles = await Promise.all(filmPromises);

            const speciesPromises = character.species.map(async(speciesURL)=> {
              const speciesResponse = await fetch(speciesURL);
              const speciesData = await speciesResponse.json();
              return speciesData.name;
            })
            const speciesName = await Promise.all(speciesPromises);

            return {
              ...character, 
              films: filmTitles,
              species: speciesName,
            }
          })
        )

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
