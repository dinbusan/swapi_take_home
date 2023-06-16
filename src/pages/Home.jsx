import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?page=${page}`
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
  }, [page]);


  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Species</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.birth_year}</td>
                  <td>{item.species}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {console.log(data)}
          <button onClick={handlePrev} disabled={page === 1}>
            Prev Page
          </button>
          <button onClick={handleNext} disabled={page === 9}>
            Next Page
          </button>
        </>
      )}
    </div>
  );
}

export default MyComponent;
