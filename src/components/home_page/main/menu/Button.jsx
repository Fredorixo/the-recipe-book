import React from 'react'
import '../../../../styles/home_page/main/menu/Button.css'

export default function Button(props) {
  return (
    <button onClick={props.handleClick} className='btn'>
        <img className='btn--img' src={`/images/${props.img}`} alt="image" />
        <span className='btn--text'>{props.text}</span>
    </button>
  )
}