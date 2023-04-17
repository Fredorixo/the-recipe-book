import React from 'react'
import '../../../styles/recipe_page/header/Header.css'

export default function Header(props) {
  return (
    <header>
      <img className='recipe--header--image' src={props.img} alt="image" />
      <h1 className='recipe--header--title'>{props.title}</h1>
    </header>
  )
}