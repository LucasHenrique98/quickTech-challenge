import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { Container } from '../styles/pokemonList';
import { log } from 'console';

interface Pokemons {
  name: string;
  url: string;
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0')
      .then((resp) => {
        setPokemons(resp.data.results);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {pokemons ? (
        <div>
          <Container>
            {pokemons.map((pokemon, index) => {
              return <PokemonCard pokemonList={pokemon} />;
            })}
          </Container>
        </div>
      ) : (
        <h1>Loading Pokemon's</h1>
      )}
    </>
  );
}
