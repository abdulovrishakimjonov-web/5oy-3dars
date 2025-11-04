import React from 'react'
import Header from './conpanet/header'
import Showkese from './conpanet/Showkese'
import Navbar from './conpanet/Navbar'
import About from './conpanet/About'
import Contact from './conpanet/Contact'
import Atribut from './conpanet/Atribut'
import Container from './conpanet/Container'
import Footer from './conpanet/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Showkese/>
      <Navbar/>
      <About/>
      <Contact/>
      <Atribut/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App