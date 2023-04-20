import React from 'react'
import Main from '../components/recipe_page/main/Main'
import Header from '../components/recipe_page/header/Header'
import {useParams} from 'react-router-dom'

export default function RecipePage() {
  const {id} = useParams()
  const data = JSON.parse(localStorage.getItem(`id=${id}`))

  return (
    <div>
      <Header
        img={data.image}
        title={data.recipe}
      />
      <Main
        data={data}
      />
    </div>
  )
}