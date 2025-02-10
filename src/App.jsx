import React from 'react'
import './App.css'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Instant from './pages/Instant'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Footer from './layouts/Footer'
import Learn from './pages/Learn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mailing from './pages/Mailing'

function App() {


  return (
    <div className='font-roboto'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instant" element={<Instant />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/learn" element={<Learn />} />
      <Route path= "/mailing" element={<Mailing/>} />
    </Routes>
    </BrowserRouter>
    
      
    </div>
  )
}

export default App
