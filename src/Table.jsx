import React, { useState } from "react";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

function Table({ data }) {
    
  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Height", accessor: "height" },
      { Header: "Mass", accessor: "mass" },
      { Header: "Hair Color", accessor: "hair_color" },
      { Header: "Skin Color", accessor: "skin_color" },
      { Header: "Eye Color", accessor: "eye_color" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

    

  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>
                  {cell.column.id === "name" ? (
                    <Link
                      to={`/detail/${
                        row.original.url.split("/").slice(-2)[0]
                      }`}
                    >
                      {cell.render("Cell")}
                    </Link>
                  ) : (
                    cell.render("Cell")
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
</>
  );
}

export default Table;
