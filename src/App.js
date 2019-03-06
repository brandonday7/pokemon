import React, { Component } from 'react';
import Pokemon from "./components/Pokemon"
import ButtonsContainer from "./components/ButtonsContainer"
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
        <ButtonsContainer loading={loading} viewPokemon={this.viewPokemon}/>
      </div>
    );
  }
}

export default App;
