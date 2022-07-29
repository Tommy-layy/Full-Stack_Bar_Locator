import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import Review from './components/Review'
import BarCard from './components/BarCard'
import Nav from './components/Nav'
import axios from 'axios'
import './App.css'
import Bar from './components/BarCard'

const BASE_URL = 'http://localhost:3001'

function App() {
  const [bars, setBars] = useState([])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
