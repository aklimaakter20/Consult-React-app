import React from 'react'
import './navbar.css'
import Logo from "../assets/logo (2).png"
function Navbar() {
  return (
    <div>
      <nav>
        <div className='navbar'>
          <div className='logo-div '>
            <div className="logo">
               <img src={Logo} alt="" />
               <h1>consultant</h1>
            </div>
          </div>
          <div className='nav-links'>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Contact</a></li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
