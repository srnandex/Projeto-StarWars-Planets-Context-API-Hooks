const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async () => {
  const response = await fetch(url);
  const { results } = await response.json();
  console.log(results);
  return results;
};
