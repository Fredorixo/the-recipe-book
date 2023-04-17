import React from 'react'
import NutrientTile from './NutrientTile'
import '../../../styles/recipe_page/main/Nutrients.css'

export default function Nutrients(props) {
  return (
    <section>
      <h2 className='nutrients--title'>Nutrients</h2>
      <div className='nutrients--row'>
        <NutrientTile
          value={props.calories}
          nutrient="calories"
          unit="kcals"
        />
        <NutrientTile
          value={props.carbohydrates}
          nutrient="carbohydrates"
          unit="grams"
        />
        <NutrientTile
          value={props.fats}
          nutrient="fats"
          unit="grams"
        />
        <NutrientTile
          value={props.proteins}
          nutrient="proteins"
          unit="grams"
        />
      </div>
    </section>
  )
}