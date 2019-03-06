const randomId = () => Math.floor(Math.random()*500 + 1)

const capitalize = string => string[0].toUpperCase() + string.substring(1) 

const getPokemon = () => (
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId()}/`)
  .then(data => data.json())
  .then(json => json)
  .catch(e => console.log(e))
)

const concatMoves = moves => {
	let moveString = ""
	moves.forEach(move => moveString += capitalize(move.move.name) + ", ")
	return moveString.slice(0, -2)
}

export { getPokemon, capitalize, concatMoves } 