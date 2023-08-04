import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/shared/Navbar/Navbar'
import Speisekarte from './components/pages/Speisekarte/Speisekarte'
import Kontakt from './components/pages/Kontakt/Kontakt'
import Oeffnungszeiten from './components/pages/Oeffnungszeiten/Oeffnungszeiten'
import Galerie from './components/pages/Galerie/Galerie'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Speisekarte/>}/>
      <Route path='/kontakt' element={<Kontakt/>}/>
      <Route path='/oeffnungszeiten' element={<Oeffnungszeiten/>}/>
      <Route path='/galerie' element={<Galerie/>}/>
    </Routes>
    </>
  )
}

export default App
