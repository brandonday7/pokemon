import { handleActions } from 'redux-actions';

const initialState = {
	pokemon: []
}

const ADD_POKEMON = "ADD_POKEMON"
// const REMOVE_POKEMON = "REMOVE_POKEMON"


// ACTIONS
export const addPokemon = newPokemon => ({
	type: "ADD_POKEMON",
	newPokemon
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
  },
  initialState
);