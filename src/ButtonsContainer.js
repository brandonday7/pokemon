import React from "react"
import Button from "./Button"
import "./App.css"

const ButtonsContainer = ({ pokemon, loading, viewPokemon }) => (
	<div className="corner">
		<Button ball={true} loading={loading} label="Find Pokemon" viewPokemon={viewPokemon}/>
	</div>
)

export default ButtonsContainer