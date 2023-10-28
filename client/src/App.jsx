import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Registration from './Components/Registration'
import Login from './Components/Login'
import CreatePost from './Components/CreatePost'
import Post from './Components/Post'
import('./App.css')

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path='/' element = {<Post/>}/>
           <Route path='/create-post' element = {<CreatePost/>}/>
           <Route path='/login' element = {<Login/>}/>
           <Route path='/register' element = {<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

