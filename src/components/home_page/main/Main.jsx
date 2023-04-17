import React from 'react'
import Menu from './menu/Menu'
import Food from './food/Food'
import '../../../styles/home_page/main/Main.css'

export default function Main() {
  const [id, setId] = React.useState(0)
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
    setQuery('calories__lt=500&calories__gt')
    setQueryValue(300)
    handleAnimation()
  }

  function updateQueryForQuickDiet() {
    setQuery('cook_time_in_minutes__lt=11&cook_time_in_minutes__tg')
    setQueryValue(0)
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

  function createRandomID() {
    let num = Math.floor(Math.random() * 489 + 1)
    if(num === 121) ++num
    setId(num)
    handleAnimation()
  }

  // Handle API Calls
  React.useEffect(() => {
    if(!localStorage.getItem(`${query}-${queryValue}`)) {
      fetch(`https://keto-diet.p.rapidapi.com/?${query}=${queryValue}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
          'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
        }
      })
      .then(res => res.json())
      .then(data => {
        setData(data)

        data.forEach(item => {
          localStorage.setItem(`id-${item.id}`, JSON.stringify(item))
        })

        localStorage.setItem(`${query}-${queryValue}`, JSON.stringify(data))
      })
      .catch(error => console.log(error))
    } else {
      setData(JSON.parse(localStorage.getItem(`${query}-${queryValue}`)))
    }
  }, [query, queryValue])
  
  // API Call for Random Selection
  React.useEffect(() => {
    if(id) {
      if(!localStorage.getItem(`id-${id}`)) {
        fetch(`https://keto-diet.p.rapidapi.com/?id=${id}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
            'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
          }
        })
        .then(res => res.json())
        .then(data => {
          setData(data)
          localStorage.setItem(`id-${id}`, JSON.stringify(data[0]))
        })
        .catch(error => console.log(error))
      } else {
        setData([JSON.parse(localStorage.getItem(`id-${id}`))])
      }
    }
  }, [id])

  return (
    <main className='home--main' id='home--main'>
      <Menu
        handleClick={handleClick}
        createRandomID={createRandomID}
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