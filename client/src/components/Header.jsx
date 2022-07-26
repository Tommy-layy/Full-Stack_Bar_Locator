import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to='/bar'>Bars</Link>
        <Link to='/reviews'>Reviews</Link>
      </nav>
    </header>
  )
}

export default Header