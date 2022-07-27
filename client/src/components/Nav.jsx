import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to='/bar'>Bars</Link>
      </nav>
    </header>
  )
}

export default Nav