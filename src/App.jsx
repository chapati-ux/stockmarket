import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'


function App() {

  return (
    <>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/aboutus' element={<AboutUs/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
       <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
