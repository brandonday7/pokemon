import React from "react"
import Button from "./Button"
import "./buttons.css"

const ButtonsContainer = ({ loading, viewPokemon, viewPokedex, pokedex }) => (
	<div className="corner">
		<Button ball={true} label={`Pokédex (${pokedex.pokemon.length})`} onClick={viewPokedex} />
		<Button ball={true} loading={loading} label="Find Pokémon" onClick={viewPokemon}/>
	</div>
)

export default ButtonsContainer