import React from 'react'
import { About, Blog, Contact, Home, Mywork } from './pages'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/blogs' element = {<Blog />} />
    </Routes>

  )
}

export default App