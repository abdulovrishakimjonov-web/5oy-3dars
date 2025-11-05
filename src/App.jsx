import React from 'react'

import Showkeses from './components/Showkeses'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Atribut from './components/Atribut'
import Container from './components/Container'
import Footerr from './components/Footerr'
import Header from './components/Header'
const App = () => {
  return (
    <div>
      <Header/>
      <Showkeses/>
      <Navbar/>
      <About/>
      <Contact/>
      <Atribut/>
      <Container/>
      <Footerr/>
    </div>
  )
}

export default App