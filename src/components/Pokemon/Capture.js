import React from "react"
import "./pokemon.css"

const Capture = ({ newPokemon, addPokemon }) => (
	<img 
		onClick={() => addPokemon(newPokemon)}
		src="http://pngimg.com/uploads/pokeball/pokeball_PNG7.png"
		width="50"
		alt="capture"
		className="pokeball"
	/>
)

export default Capture