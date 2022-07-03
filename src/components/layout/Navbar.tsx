import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { activePage } = useSelector((state : any) => state.select);

  const getClassName = (page: string) => {
    if (activePage === page) {
      return 'activeSection';
    }
    return 'section';
  }

  return (
    <nav className='nav'>
      <div className='logo'>
        <p>WaterDect</p>
      </div>
      <div className='nav-links'>
        <NavLink to="/" className={getClassName('Home')}>Home</NavLink>
        <NavLink to="/gallery" className={getClassName('Gallery')}>Gallery</NavLink>
        <NavLink to="/about" className={getClassName('About')}>About</NavLink>
      </div>
      <div className='menu-toggle'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
