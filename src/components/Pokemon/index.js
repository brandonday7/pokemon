import React, { Fragment } from "react"
import Capture from "../../containers/Capture"
import { capitalize, concatMoves, unknownPokemon } from "../../utilities.js"
import './pokemon.css';

const Pokemon = ({ pokemon, pokedex }) => (
	<Fragment>
		{pokemon && <div className="pokemon">
				<img 
					src={pokemon.sprites.front_default} 
					className="pokemon__sprite"
					alt="sprite"
				/>
				<div className="pokemon__details">
					<p className="pokemon__details__name">Name: {capitalize(pokemon.name)}</p>
					<p className="pokemon__details__name">Type: {capitalize(pokemon.types[0].type.name)}</p>
					<p className="pokemon__details__name">Moves: {concatMoves(pokemon.moves.slice(0, 3))}</p>
				</div>
				{unknownPokemon(pokemon, pokedex) && <Capture newPokemon={pokemon} />}
			</div>
		}
		</Fragment>
)

export default Pokemon