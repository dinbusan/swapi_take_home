import React, { useState } from "react";
import { Link } from "react-router-dom";

const Table = ({ data, handleNext, handlePrev }) => {
  return (
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
              <td>
                <Link to={`/details/${index}`}>{item.name}</Link>
              </td>
              <td>{item.birth_year}</td>
              <td>{item.species}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePrev} >
        Prev Page
      </button>
      <button onClick={handleNext}>
        Next Page
      </button>
    </>
  );
};

export default Table;
