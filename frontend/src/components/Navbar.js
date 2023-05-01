import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'


const Navbar = () => {
  return (
    <nav>
        <Link to="/">Kezdőlap</Link>
        <Link to="/about">Rólunk</Link>
        <Link to="/dump">Átmeneti raktár</Link>
    </nav>
  )
}

export default Navbar
