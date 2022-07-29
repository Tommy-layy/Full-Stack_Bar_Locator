import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <header>
      <nav>
      <div className='NavBar'>
        <Link to="/">Home</Link>
        <Link to='/bar'>Bars</Link>
        <Link to='/review'>Reviews</Link>
      </div>
      </nav>
    </header>
  )
}

export default Nav