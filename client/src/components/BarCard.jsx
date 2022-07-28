import React from 'react'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Bar = (props) => {
  const BASE_URL = 'http://localhost:3001'

  const [bars, setBars] = useState()

  useEffect(() => {
    const getBars = async () => {
      const bar = await axios.get(`${BASE_URL}/bar`)
      console.log(bar.data)
      setBars(bar.data)
    }
    getBars()
  }, [])

  let navigate = useNavigate()

  const showBar = (bar) => {
    navigate(`${bar.id}`)
  }

  return (
    <div className="BarCard">
      {bars?.map((bar) => {
        return (
          <div className="bar-card">
            <h2>{bar.name}</h2>
            <h3>
              <img src={bar.image} />
            </h3>
            <h4>{bar.description}</h4>
            <h5>{bar.rating}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Bar