import React from 'react'
import backgroundImage from '../../../images/background-image.svg'
import spoon from '../../../images/spoon.png'
import '../../../styles/home_page/header/Header.css'

export default function Header() {
  function handleClick() {
    const mainSection = document.getElementById('home--main')
    if(mainSection) mainSection.scrollIntoView({behavior: "smooth"})
  }

  function handleAnimation() {
    const menuSection = document.getElementById('menu')
    if(menuSection) menuSection.classList.toggle('slide')

    const burgerIcon = document.getElementById('hamburger-icon')
    if(burgerIcon) burgerIcon.classList.toggle('close')
  }

  return (
    <header className='home--header'>
        <img className='home--header--img' src={backgroundImage} alt="background-image" />
        <h1 className='home--header--title'>The Recipe Book</h1>
        <p className='home--header--text'>Home Made Food Instantly</p>
        <button onClick={handleClick} className='home--header--btn'>
            <span className='home--header--btn--text'>Get Cooking</span>
            <img className='spoon' src={spoon} alt="spoon" />
        </button>
        <button id='hamburger-icon' onClick={handleAnimation} className='hamburger-icon'>
          <div className='bars'></div>
          <div className='bars'></div>
          <div className='bars'></div>
        </button>
    </header>
  )
}