import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import BarCard from '../components/BarCard'

const Home = ({ handleBarSelect }) => {
  const [bar, setBars] = useState([])

  useEffect(() => {
    const getBars = async () => {
      const res = await axios.get(`http://localhost:3001/bar`)
      setBars(res.data.bar)
    }
    getBars()
  }, [])

  return (
    <div>
      <h1>Top Bars in KC</h1>
      <div className="home-bars">
        {bar?.map((bar, index) => (
          <div key={index}>
            <BarCard
              image={bar.image}
              name={bar.name}
              bar={bar.bar}
              rating={bar.rating}
              onClick={() => handleBarSelect(bar)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
