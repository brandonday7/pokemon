import React, { Component } from "react"
import Button from "./Button"
import "./buttons.css"

class ButtonsContainer extends Component {
	render() {
		const { loading, viewPokemon } = this.props
		return (
			<div className="corner">
				<Button ball={true} label="Pokedex"/>
				<Button ball={true} loading={loading} label="Find Pokemon" viewPokemon={viewPokemon}/>
			</div>
		)
	}
}

export default ButtonsContainer