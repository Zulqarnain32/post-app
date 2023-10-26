import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Registration from './Components/Registration'
import Login from './Components/Login'
import('./App.css')

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path='/' element = {<Home/>}/>
           <Route path='/login' element = {<Login/>}/>
           <Route path='/register' element = {<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
