import React from 'react'
import Menu from './menu/Menu'
import Food from './food/Food'
import '../../../styles/home_page/main/Main.css'

export default function Main() {
  const [query, setQuery] = React.useState('category')
  const [queryValue, setQueryValue] = React.useState(2)
  const [data, setData] = React.useState([])

  function handleAnimation() {
    // Toggling Animation on Mobile View
    const menuSection = document.getElementById('menu')
    if(menuSection) menuSection.classList.toggle('slide')

    const burgerIcon = document.getElementById('hamburger-icon')
    if(burgerIcon) burgerIcon.classList.toggle('close')
  }

  function updateQueryForNutritiousDiet() {
    setQuery("'calories__lt=500&calories__gt'")
    setQueryValue(300)
    handleAnimation()
  }

  function updateQueryForQuickDiet() {
    setQuery("'cook_time_in_minutes__lt=11&cook_time_in_minutes__tg'")
    setQueryValue(1)
    handleAnimation()
  }
  
  function handleClick(category) {
    setQuery('category')
    setQueryValue(category)
    handleAnimation()
  }
  
  function handleKeyDown(event) {
    if(event.key === "Enter") {
      setQuery('search')
      setQueryValue(event.target.value)
    }
  }

  function createRandomNumber() {
    let num = Math.floor(Math.random() * 489 + 1)
    if(num === 121) ++num
    setQuery('id')
    setQueryValue(num)
    handleAnimation()
  }
  
  // Manage API Calls
  React.useEffect(() => {
    if(queryValue) {
      if(!localStorage.getItem(`${query}-${queryValue}`)) {
        fetch(`/.netlify/functions/fetch-recipes?query=${query}&value=${queryValue}`)
          .then(res => res.json())
          .then(data => {
            setData(data)

            data.forEach(item => {
              localStorage.setItem(`id-${item.id}`, JSON.stringify(item))
            })

            if(query !== 'id') localStorage.setItem(`${query}-${queryValue}`, JSON.stringify(data))
          })
          .catch(error => console.log(error))
      } else {
        const data = JSON.parse(localStorage.getItem(`${query}-${queryValue}`))
        query === 'id' ? setData([data]) : setData(data)
      }
    }
  }, [query, queryValue])

  return (
    <main className='home--main' id='home--main'>
      <Menu
        handleClick={handleClick}
        createRandomNumber={createRandomNumber}
        updateQueryForNutritiousDiet={updateQueryForNutritiousDiet}
        updateQueryForQuickDiet={updateQueryForQuickDiet}
      />
      <Food
        handleKeyDown={handleKeyDown}
        data={data}
      />
    </main>
  )
}