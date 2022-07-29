import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <header>
      <div className='NavBar'>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to='/bar'>Bars</Link>
        <br></br>
        <Link to='/review'>Reviews</Link>
      </nav>
      </div>
    </header>
  )
}

export default Nav