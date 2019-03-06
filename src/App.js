import React, { Component } from 'react';
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
        <Pokemon pokemon={pokemon} pokedex={pokedex} /> :
        <Pokedex pokedex={pokedex}/>
      }
        <ButtonsContainer loading={loading} viewPokemon={this.viewPokemon} />
      </div>
    );
  }
}

export default App;
