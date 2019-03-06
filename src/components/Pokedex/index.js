import React from "react"
import Capture from "../../containers/Capture"
import { capitalize } from "../../utilities.js"
import './pokedex.css';

const Pokedex = ({ pokedex }) => (
	<div className="pokedex">
		{pokedex.pokemon.map(pokemon => (
			<div className="pokedex__member">
				<img src={pokemon.sprite} className="pokedex__member__img"/>
				<p className="pokedex__member__name">{capitalize(pokemon.name)}</p>
			</div>
		))}
	</div>
)

export default Pokedex