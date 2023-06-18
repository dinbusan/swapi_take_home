export const fetchCharacterData = async (page) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const jsonData = await response.json();


  const characterData = await Promise.all(
    jsonData.results.map(async (character) => {
      const filmPromises = character.films.map(async (filmUrl) => {
        const filmResponse = await fetch(filmUrl);
        const filmData = await filmResponse.json();
        return filmData.title;
      });
      const filmTitles = await Promise.all(filmPromises);

      const speciesPromises = character.species.map(async (speciesURL) => {
        const speciesResponse = await fetch(speciesURL);
        const speciesData = await speciesResponse.json();
        return speciesData.name;
      });
      const speciesName = await Promise.all(speciesPromises);

      const homeworldResponse = await fetch(character.homeworld);
      const homeworldData = await homeworldResponse.json();
      const homeworldName = homeworldData.name;

      return {
        ...character,
        films: filmTitles,
        species: speciesName,
        homeworld: homeworldName,
      };
    })
  );

  return characterData;
};
