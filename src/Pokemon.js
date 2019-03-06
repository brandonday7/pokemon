import React from "react"
import './App.css';
import { capitalize } from "./utilities.js"

const Pokemon = ({ pokemon }) => (
	<div className="pokemon">
		<p className="pokemon__name">{capitalize(pokemon.name)}</p>

	</div>
)

export default Pokemon