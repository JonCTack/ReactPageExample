import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {
  return (
    <nav id='navBar'>
    <Link to="/" className="link">
      <div>Dashboard</div>
    </Link>
    <Link to="/currencies" className="link">
      <div>Currencies</div>
    </Link>
    </nav>
  )
}

export default Nav