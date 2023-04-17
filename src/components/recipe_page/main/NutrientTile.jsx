import React from 'react'
import '../../../styles/recipe_page/main/NutrientTile.css'

export default function NutrientTile(props) {
  return (
    <div className='nutrients--tile'>
        <div className='circle'>
            <div className='nutrients--tile--value'>{props.value}</div>
        </div>
        <h3 className='nutrients--tile--nutrient'>{props.nutrient}</h3>
        <p className='nutrients--tile--unit'>{props.unit}</p>
    </div>
  )
}