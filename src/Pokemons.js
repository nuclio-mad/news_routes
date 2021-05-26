import { useEffect, useState } from "react";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=200')
    .then(response => response.json())
    .then(data => setPokemons(data.results));
  }, [])

  return <ul>
    {pokemons.map(pokemon => (
      <li>{pokemon.name}</li>
    ))}
  </ul>
}