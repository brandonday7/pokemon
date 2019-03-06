import React from "react"
import "./buttons.css"

const Button = ({ label, ball = false, loading, viewPokemon }) => (
  <div 
    className="btn btn--white" 
    onClick={() => {if (!loading) viewPokemon()}}
  >
  	{label}
    {ball && <img 
      src="https://i.pinimg.com/originals/15/61/dc/1561dcb8a19ad8e6d4417b29f8c38161.jpg"
      className={`btn__img ${loading && "spin"}`}
      alt="pokeball"
      width="20"
     />}
  </div>
)

export default Button