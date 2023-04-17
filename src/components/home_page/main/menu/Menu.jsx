import React from 'react'
import Discover from './Discover'
import Variety from './Variety'
import '../../../../styles/home_page/main/menu/Menu.css'

export default function Menu(props) {
    return (
        <section id='menu' className="menu">
            <Discover
                updateQueryForNutritiousDiet={props.updateQueryForNutritiousDiet}
                updateQueryForQuickDiet={props.updateQueryForQuickDiet}
            />
            <Variety
                handleClick={props.handleClick}
                createRandomID={props.createRandomID}
            />
        </section>
    )
}