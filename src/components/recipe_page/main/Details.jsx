import React from 'react'
import clock from '../../../images/clock.png'
import serving from '../../../images/serving.png'
import difficulty from '../../../images/difficulty.png'
import DetailTile from './DetailTile'
import '../../../styles/recipe_page/main/Details.css'

export default function Details(props) {
    let diff = props.difficulty.toLowerCase()
    if(diff === "m" || diff === "difficult" || diff === "meduim") diff = "medium"

    const prepHours = Math.floor(props.prepTime / 60)
    const prepMinutes = Math.floor(props.prepTime % 60)
    let prepTime;

    if(prepHours) prepTime = `${prepHours} HR`

    if(prepMinutes) {
        if(prepTime) {
            prepTime = prepTime + ` ${prepMinutes} MIN`
        } else {
            prepTime = `${prepMinutes} MIN`
        }
    }

    if(!prepTime) prepTime = '0 MIN'

    const cookHours = Math.floor(props.cookTime / 60)
    const cookMinutes = Math.floor(props.cookTime % 60)
    let cookTime;

    if(cookHours) cookTime = `${cookHours} HR`

    if(cookMinutes) {
        if(cookTime) {
            cookTime = cookTime + ` ${cookMinutes} MIN`
        } else {
            cookTime = `${cookMinutes} MIN`
        }
    }

    if(!cookTime) cookTime = '0 MIN'

    return (
        <section className='details'>
            <h2 className='details--title'>Details</h2>
            <DetailTile
                img={clock}
                text={`Prepartion Time: ${prepTime}`}
            />
            <DetailTile
                img={clock}
                text={`Cooking Time: ${cookTime}`}
            />
            <DetailTile
                img={serving}
                text={`Servings: ${props.servings}`}
            />
            <DetailTile
                img={difficulty}
                text={`Difficulty: ${diff.toUpperCase()}`}
            />
        </section>
    )
}