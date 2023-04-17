import React from 'react'
import '../../../styles/recipe_page/main/DetailTile.css'

export default function DetailTile(props) {
  return (
    <div className='details--tile'>
      <img className='details--tile--img' src={props.img} alt="image" />
      <p className='details--tile--text'>{props.text}</p>
    </div>
  )
}