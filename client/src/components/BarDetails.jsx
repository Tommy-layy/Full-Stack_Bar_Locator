import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const BASE_URL = 'http://localhost:3001/api'

const BarDetails = (props) => {
    
    const [bar, setBar] = useState('')
    let { id } = useParams()
    // console.log('entering use effect')
    useEffect(() => {
        const getBarById = async () => {
            let data = await axios.get(`${BASE_URL}/bar/${id}`)
            setBoba(data.data)
            // console.log(data)
        }
        getBarById()
    }, [])

    return bar ? (
        <div className="detail">
            <div className="detail-header">
                <img className="imgdetail" style={{display: 'block', width: '6em', height: '6em', justifyContent: 'center', alignItems: 'center'}} src={boba.image} />
                <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1>{bar.name}</h1>
                </div>
            </div>
            <div className="info-wrapper">
                <div style={{display: 'flex', justifyContent:'flex-end', alignItems: 'right', flexDirection: 'column'}}>
                    <h2>{bar.rating}</h2>
                    <h2>{bar.rating}</h2>
                </div>
                <h3>{bar.description}</h3>
            </div>
        </div>
    ) : null;
}

export default BobaDetails