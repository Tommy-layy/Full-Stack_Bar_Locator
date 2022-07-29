import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <header>
      <div className='NavBar'>
        <a>
        <Link to="/">Home</Link>
        </a>
        <a>
        <Link to='/bar'>Bars</Link>
        </a>
        <a>
        <Link to='/review'>Reviews</Link>
        </a>
      </div>
    </header>
  )
}

export default Nav