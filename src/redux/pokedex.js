import { handleActions } from 'redux-actions';
import { capitalize } from "../utilities.js"

const initialState = {
	view: "explore",
	error: null,
	pokemon: []
}

const ADD_POKEMON = "ADD_POKEMON"
const VIEW_POKEDEX = "VIEW_POKEDEX"
const VIEW_EXPLORE = "VIEW_EXPLORE"
const REMOVE_POKEMON = "REMOVE_POKEMON"


// ACTIONS
export const addPokemon = newPokemon => ({
	type: "ADD_POKEMON",
	newPokemon
})

export const removePokemon = index => ({
	type: "REMOVE_POKEMON",
	index
})

export const viewPokedex = () => ({
	type: "VIEW_POKEDEX"
})

export const viewExplore = () => ({
	type: "VIEW_EXPLORE"
})


// REDUCERS
export default handleActions(
  {
    [ADD_POKEMON]: (state, { newPokemon }) => {
    	if (state.pokemon.length < 6) {
	    	return {
		    	...state,
		      pokemon: [
		      	...state.pokemon, 
		      	{
		      		name: capitalize(newPokemon.name),
		      		sprite: newPokemon.sprites.front_default 
		      	}
		      ]
		    }
    	} else {
    		return {
    			...state,
    			error: `Your Pokédex is full!\n Remove one to make room for ${capitalize(newPokemon.name)}`
    		}
    	}
	  },
    [REMOVE_POKEMON]: (state, { index }) => {
    	const copy = state.pokemon
    	copy.splice(index, 1)
    	return {
    		...state,
    		error: null,
      	pokemon: copy
    	}
    },
    [VIEW_POKEDEX]: (state) => ({
    	...state,
    	view: "pokedex"
    }),
    [VIEW_EXPLORE]: (state) => ({
    	...state,
    	view: "explore"
    }),
  },
  initialState
);