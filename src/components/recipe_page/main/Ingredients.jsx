import React from 'react'
import '../../../styles/recipe_page/main/Ingredients.css'

export default function Ingredients(props) {
  return (
    <section>
      <h2 className='ingredients--title'>Ingredients</h2>
      <ul className='ingredients--list'>
        {props.ingredients}
      </ul>
    </section>
  )
}