import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import { Body } from './styles/global';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <Router>
      <Body>
        <Header />
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
