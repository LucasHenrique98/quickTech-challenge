import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from '../styles/pokemonCard';

interface PokemonCardProps {
  pokemonList: {
    name: string;
    url: string;
  };
}

export default function PokemonCard(props: PokemonCardProps) {
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonName, setPokemonName] = useState('');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  useEffect(() => {
    axios.get(props.pokemonList.url).then((resp) => {
      axios.get(resp.data.forms[0].url).then((resp) => {
        setPokemonId(resp.data.id);
        setPokemonName(resp.data.name);
      });
    });
  }, []);

  return (
    <Link to={`pokemon/${pokemonId}`}>
      <Card>
        <header>
          <span>{pokemonId}</span>
        </header>

        <img src={imageUrl} alt="Pokemon image" />
        <span>
          {pokemonName
            .toLowerCase()
            .split(' ')
            .map(
              (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
            )
            .join(' ')}
        </span>
      </Card>
    </Link>
  );
}
