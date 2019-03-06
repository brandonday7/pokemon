import React, { Component, Fragment } from 'react';
import Pokemon from "./components/Pokemon"
import Pokedex from "./components/Pokedex"
import ButtonsContainer from "./containers/ButtonsContainer"
import { getPokemon } from "./utilities.js"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: null,
      loading: false
    }
  }

  loading = () => this.setState({ loading: true })
  doneLoading = () => this.setState({ loading: false })

  viewPokemon = () => {
    this.loading()
    getPokemon().then(pokemon => this.setState({ pokemon }, this.doneLoading))
  }

  render() {
    const { pokemon, loading } = this.state
    const { pokedex } = this.props
    return (
      <div className="container">
      {pokedex.view === "explore" ? 
        <Fragment>
          {pokemon && <Pokemon pokemon={pokemon} />}
          <ButtonsContainer loading={loading} viewPokemon={this.viewPokemon}/>
        </Fragment> : 
        <Pokedex pokedex={pokedex}/>
      }
      </div>
    );
  }
}

export default App;
