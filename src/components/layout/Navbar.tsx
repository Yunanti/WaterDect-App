import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <p>WaterDect</p>
      </div>
      <div className='nav-links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/about">About</NavLink>
      </div>
      <div className='menu-toggle'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
