import React from 'react'

import Showkeses from './conpanet/Showkeses'
import Navbar from './conpanet/Navbar'
import About from './conpanet/About'
import Contact from './conpanet/Contact'
import Atribut from './conpanet/Atribut'
import Container from './conpanet/Container'
import Footerr from './conpanet/Footerr'
import Headerr from './conpanet/Headerr'
const App = () => {
  return (
    <div>
      <Headerr/>
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