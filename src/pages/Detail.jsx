import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = ({ data }) => {
  const { id } = useParams();
  const parsedId = parseInt(id);

  if (isNaN(parsedId) || parsedId < 0 || parsedId >= data.length) {
    return <div>Invalid character ID</div>;
  }

  const character = data[parsedId];

  return (
    <div>
      <div className="flex justify-center my-5">
        <div class="max-w-sm py-5 px-10 text-2xl space-y-5 rounded overflow-hidden shadow-lg">
          <h2 className="">Character Details</h2>
          <p>Name: {character.name}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Species: {character.species}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.Mass}</p>
          <p>Skin Color: {character.skin_color}</p>
          <p>Films: {character.films.join(", ")}</p>
          <p>Homeworld: {character.homeworld}</p>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <Link to="/">
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-sky-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Go Back
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
