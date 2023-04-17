import React from 'react'
import Details from './Details'
import Directions from './Directions'
import Ingredients from './Ingredients'
import Nutrients from './Nutrients'
import '../../../styles/recipe_page/main/Main.css'

export default function Main(props) {
  const data = props.data
  const ingredients = []
  const directions = []
  
  for(let i = 1; i <= 10 && data[`ingredient_${i}`]; ++i) {
    ingredients.push(
      <li key={i}>
        {data[`measurement_${i}`]} {data[`ingredient_${i}`]}
      </li>
    );
  }

  for(let i = 1; i <= 10 && data[`directions_step_${i}`]; ++i) {
    directions.push(
      <li key={i}>
        {data[`directions_step_${i}`]}
      </li>
    );
  }

  return (
    <main className='recipe--main'>
      <Details
        prepTime={data.prep_time_in_minutes ?? '0'}
        cookTime={data.cook_time_in_minutes ?? '0'}
        servings={data.serving}
        difficulty={data.difficulty ?? 'easy'}
      />
      <Nutrients
        calories={data.calories}
        carbohydrates={data.carbohydrates_in_grams}
        proteins={data.protein_in_grams}
        fats={data.fat_in_grams}
      />
      <Ingredients
        ingredients={ingredients}
      />
      <Directions
        directions={directions}
      />
    </main>
  )
}