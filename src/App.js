import React, { Component } from 'react';
import Pokemon from "./Pokemon"
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
        <div 
          className="btn btn--white btn--corner" 
          onClick={() => {if (!loading) this.viewPokemon()}}
        >Find Pokemon
          <img 
            src="https://i.pinimg.com/originals/15/61/dc/1561dcb8a19ad8e6d4417b29f8c38161.jpg"
            className={`btn__img ${loading && "spin"}`}
            alt="pokeball"
            width="20"
          />
        </div>
        {pokemon && <Pokemon pokemon={pokemon}/>}
      </div>
    );
  }
}

export default App;
