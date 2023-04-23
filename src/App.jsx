import React from 'react'
import {Route, Routes, HashRouter as Router} from 'react-router-dom'
import RecipePage from './pages/RecipePage'
import HomePage from './pages/HomePage'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/recipe/:id' Component={RecipePage} />
      </Routes>
      <Footer />
    </Router>
  )
}