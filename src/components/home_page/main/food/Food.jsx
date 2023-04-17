import React from 'react'
import Search from './Search'
import FoodItem from './FoodItem'
import {Link} from 'react-router-dom'
import '../../../../styles/home_page/main/food/Food.css'

export default function Food(props) {
    const foodItems = props.data.map((item) => {
        return (
            <Link
                key={item.id}
                to={`/recipe/${item.id}`}
                target='_blank'
                rel='noreferrer noopener'
                className='food--link'
            >
                <FoodItem
                    title={item.recipe}
                    text={item.directions_step_1}
                    img={item.image}
                    difficulty={item.difficulty}
                    serving={item.serving}
                    requiredTime={item.cook_time_in_minutes + item.prep_time_in_minutes}
                />
            </Link>
        )
    })

    const styles = {
        display: props.data.length ? "none" : "block",
        color: "#6D6D6D",
    }

    return (
        <section className="food">
            <Search handleKeyDown={props.handleKeyDown} />
            <div className="food--grid">
                {foodItems}
            </div>
            <p className='food--text' style={styles}>
                No related recipes found. Please try one from the menu
            </p>
        </section>
    )
}