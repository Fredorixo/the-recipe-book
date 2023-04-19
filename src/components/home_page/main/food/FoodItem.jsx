import React from 'react'
import person from '../../../../images/person.png'
import '../../../../styles/home_page/main/food/FoodItem.css'

export default function FoodItem(props) {
  const text = props.text?.slice(0, 40) ?? "Read more"
  let difficulty = props.difficulty?.toLowerCase() ?? "easy"
  if(difficulty === "m" || difficulty === "difficult" || difficulty === "meduim") difficulty = "medium"

  const difficultyText = difficulty === "medium" ? "med." : difficulty
  
  const requiredHours = Math.floor(props.requiredTime / 60)
  const requiredMinutes = Math.floor(props.requiredTime % 60)
  const requiredHoursText = requiredHours ? `${requiredHours} HR` : ""
  const requiredMinutesText = requiredMinutes ? `${requiredMinutes} MIN` : ""

  return (
    <div className="item">
      <img className='item--img' src={props.img} alt="recipe-image" />
      <div className='item--bookmark'>
        <img className='item--bookmark--img' src={`/images/${difficulty}.png`} alt="bookmark" />
        <p className='item--bookmark--text'>{difficultyText}</p>
      </div>
      <h2 className='item--title'>{props.title}</h2>
      <p className='item--text'>{text}...</p>
      <div className="item--serving">
        <h4 className='item--serving--title'>Serving</h4>
        <img src={person} alt="person" />
        <span>{props.serving}</span>
        <div className='item--serving--border'></div>
      </div>
      <div className="item--time">
        <h4 className='item--time--title'>Required Time</h4>
        <p className='item--time--text'>{requiredHoursText} {requiredMinutesText}</p>
      </div>
    </div>
  )
}