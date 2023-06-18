import React from "react";
import { useParams } from "react-router-dom";

const Details = ({ data }) => {
  const { id } = useParams();
  const parsedId = parseInt(id);

  if (isNaN(parsedId) || parsedId < 0 || parsedId >= data.length) {
    return <div>Invalid character ID</div>;
  }

  const character = data[parsedId];

  return (
    <div>
      <h2>Character Details</h2>
      <p>Name: {character.name}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Species: {character.species}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.Mass}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Films: {character.films.join(", ")}</p>
      <p>Homeworld: {character.homeworld}</p>
    </div>
  );
};

export default Details;
