import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Body } from '../styles/pokemon';

interface PokemonProps {
  match: { params: { pokemonIndex: number } };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface Sprites {
  front_default: string;
  front_shiny: string;
}

interface PokemonStats {
  base_stat: number;
  stat: { name: string };
}

export default function Pokemon(props: PokemonProps) {
  const pokemonIndex = props.match.params.pokemonIndex;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState<PokemonType[]>([]);
  const [sprites, setSprites] = useState<Sprites>();
  const [pokemonStats, setPokemonStats] = useState<PokemonStats[]>([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
      .then((resp) => {
        setPokemonName(resp.data.forms[0].name);
        setPokemonType(resp.data.types);
        setSprites(resp.data.sprites);
        setPokemonStats(resp.data.stats);
      });
  }, []);

  return (
    <Body>
      <div className="card">
        <header>{pokemonIndex}</header>

        <div className="pokemon">
          <div className="leftContainer">
            <div>
              <img src={imageUrl} alt="" />
              <h1>
                {pokemonName
                  .toLowerCase()
                  .split(' ')
                  .map(
                    (letter) =>
                      letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(' ')}
              </h1>
            </div>

            <div className="status">
              {pokemonStats.map((stats) => {
                return (
                  <p>
                    {stats.stat.name
                      .toLowerCase()
                      .split(' ')
                      .map(
                        (letter) =>
                          letter.charAt(0).toUpperCase() + letter.substring(1)
                      )
                      .join(' ')}
                    : {stats.base_stat}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pokemonStats">
          <div>
            <div>
              Type:{' '}
              {pokemonType.map((type) => {
                return (
                  <strong className="pokemonType">
                    {type.type.name + ' '}{' '}
                  </strong>
                );
              })}{' '}
            </div>

            <div>
              <img
                className="sprites"
                src={sprites?.front_shiny}
                alt="pokemon sprites"
              />
              <img className="sprites" src={sprites?.front_default} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}
