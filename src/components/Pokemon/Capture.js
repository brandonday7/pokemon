import React, { Fragment } from "react"
import "./pokemon.css"

const Capture = ({ newPokemon, addPokemon, error }) => (
	<Fragment>
		{!error ? 
			<img 
				onClick={() => addPokemon(newPokemon)}
				src="http://pngimg.com/uploads/pokeball/pokeball_PNG7.png"
				width="50"
				alt="capture"
				className="pokeball"
			/> : 
			<p className="capture__error">{error}</p>
		}
	</Fragment>
)

export default Capture