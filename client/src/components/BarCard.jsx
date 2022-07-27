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
  <div className='coasterCard'>
      {
        bars?.map((bar) => {
          return(
        
          <div className='bar-card' onClick={()=> showBar(bar)} key={bar.id}>
                <h3>{bar.name}</h3>
                <p> 
                  banana
                  <img src={bar.img}/>
                </p>
          </div>
        )})
      }
    </div>
  )
}

export default Bar