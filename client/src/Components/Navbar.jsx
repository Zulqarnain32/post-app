import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
       <div className="navbar-container">
            <div className="logo">
               <Link to = "/" className='logo-text'>Facebook</Link>
            </div>
          <div className="nav-links">
             <Link to = "/create-post" className='nav-link'>Create Post</Link>
             <Link to = "login" className='nav-link login'>Login</Link>
          </div>
       </div>
    </>
  )
}

export default Navbar
