import React, { Fragment } from "react"
import Button from "./Button"
import "./buttons.css"

const ButtonsContainer = ({ loading, viewPokemon, viewPokedex, viewExplore, pokedex }) => (
	<div className="corner">
		{pokedex.view === "explore" ? 
			<Fragment>
				<Button ball={true} label={`Pokédex (${pokedex.pokemon.length})`} onClick={viewPokedex} />
				<Button ball={true} loading={loading} label="Find Pokémon" onClick={viewPokemon}/>
			</Fragment> :
				<Button ball={true} label="Back" onClick={viewExplore} />
		}
	</div>
)

export default ButtonsContainer