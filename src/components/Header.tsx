import React from 'react';
import { Nav } from '../styles/header';

export default function Header() {
  return (
    <Nav>
      <img src="/assets/pokedex.svg" alt="pokedex icon" />
      <h3>React Pokedex</h3>
    </Nav>
  );
}
