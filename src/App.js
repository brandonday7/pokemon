import React, { Component } from 'react';
import Pokemon from "./Pokemon"
import Capture from "./Capture"
import ButtonsContainer from "./ButtonsContainer"
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
    return (
      <div className="container">
        {pokemon && <Pokemon pokemon={pokemon} />}
        {pokemon && <Capture pokemon={pokemon} />}
        <ButtonsContainer pokemon={pokemon} loading={loading} viewPokemon={this.viewPokemon}/>
      </div>
    );
  }
}

export default App;
