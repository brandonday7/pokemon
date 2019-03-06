import { handleActions } from 'redux-actions';

const initialState = {
	view: "explore",
	pokemon: []
}

const ADD_POKEMON = "ADD_POKEMON"
const VIEW_POKEDEX = "VIEW_POKEDEX"
const VIEW_EXPLORE = "VIEW_EXPLORE"
// const REMOVE_POKEMON = "REMOVE_POKEMON"


// ACTIONS
export const addPokemon = newPokemon => ({
	type: "ADD_POKEMON",
	newPokemon
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
    [ADD_POKEMON]: (state, { newPokemon }) => ({
    	...state,
      pokemon: [
      	...state.pokemon, 
      	{
      		name: newPokemon.name,
      		sprite: newPokemon.sprites.front_default 
      	}
      ]
    }),
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