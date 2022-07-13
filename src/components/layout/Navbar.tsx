import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <p>WaterDect</p>
      </div>
      <div className='nav-links'>
      <NavLink to="/" className='section'>Home</NavLink>
      <NavLink to="/gallery" className='section'>Gallery</NavLink>
      <NavLink to="/about" className='section'>About</NavLink>
      </div>
      <div className='menu-toggle'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
