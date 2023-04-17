import React from 'react'
import Button from './Button'
import '../../../../styles/home_page/main/menu/Discover.css'

export default function Discover(props) {
    return (
        <section className="discover">
            <h2 className='discover--title'>Discover</h2>
            <Button
                handleClick={props.updateQueryForNutritiousDiet}
                img="heart.png"
                text="nutritious"
            />
            <Button
                handleClick={props.updateQueryForQuickDiet}
                img="timer.png"
                text="make in ten"
            />
        </section>
    )
}