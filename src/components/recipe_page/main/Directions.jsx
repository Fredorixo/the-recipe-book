import React from 'react'
import '../../../styles/recipe_page/main/Directions.css'

export default function Directions(props) {
  return (
    <section>
      <h2 className='directions--title'>Directions</h2>
      <ol className='directions--list'>
        {props.directions}
      </ol>
    </section>
  )
}