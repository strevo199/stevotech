import React from 'react'
import { About, AddMywork, Blog, Contact, Home, Mywork } from './pages'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/mywork' element = {<Mywork />} />
      <Route path='/mywork/add' element = {<AddMywork />} />
      <Route path='/blogs' element = {<Blog />} />
    </Routes>

  )
}

export default App