import React from "react"
import { capitalize } from "../../utilities.js"
import './pokedex.css';

const Pokedex = ({ pokedex, removePokemon }) => (
	<div className="pokedex">
		{!pokedex.pokemon.length && <p className="pokedex__empty">Your Pokédex is empty!</p>}
		{pokedex.pokemon.map((pokemon, index) => (
			<div 
				className="pokedex__member" 
				key={index} 
				onClick={() => {
					const message = `Are you sure you want to remove ${capitalize(pokemon.name)} from your Pokédex?`
					if (window.confirm(message)) {
						removePokemon(index)
					}
				}}
			>
				<img src={pokemon.sprite} className="pokedex__member__img" alt="sprite"/>
				<p className="pokedex__member__name">{capitalize(pokemon.name)}</p>
			</div>
		))}
	</div>
)

export default Pokedex