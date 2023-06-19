import React from "react";
import { Link } from "react-router-dom";

const Table = ({ data, handleNext, handlePrev }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Birth Year
                  </th>
                  <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Species
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    className="bg-gray-100 border-b text-gray-900"
                    key={index}
                  >
                    <Link to={`/details/${index}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium hover:text-amber-500 hover:scale-110">
                        {item.name}
                      </td>
                    </Link>

                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {item.birth_year}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {item.species}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6">
        <button
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          onClick={handlePrev} 
        >
          <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Prev Page
          </span>
        </button>
        <button
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          onClick={handleNext}
        >
          <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            Next Page
          </span>
        </button>
      </div>
    </div>
  );
};

export default Table;
