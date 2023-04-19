import React from 'react'
import Button from './Button'
import '../../../../styles/home_page/main/menu/Variety.css'

export default function Variety(props) {
    return (
        <section className='variety'>
            <h2 className='variety--title'>Varieties</h2>
            <Button
                handleClick={() => props.handleClick(1)}
                img="toast.png"
                text="breakfast"
            />
            <Button
                handleClick={() => props.handleClick(2)}
                img="salad.png"
                text="appetizer"
            />
            <Button
                handleClick={() => props.handleClick(7)}
                img="soup.png"
                text="soups & stews"
            />
            <Button
                handleClick={() => props.handleClick(8)}
                img="cupcake.png"
                text="dessert"
            />
            <Button
                handleClick={() => props.handleClick(10)}
                img="chips.png"
                text="dips"
            />
            <Button
                handleClick={() => props.handleClick(11)}
                img="smoothie.png"
                text="smoothie"
            />
            <Button
                handleClick={() => props.handleClick(9)}
                img="vegan.png"
                text="vegetarian"
            />
            <Button
                handleClick={props.createRandomNumber}
                img="question-mark.png"
                text="Random"
            />
        </section>
    )
}