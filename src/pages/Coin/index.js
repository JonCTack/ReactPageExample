import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './index.css'


const Coin = () => {
  let [coinInfo, setCoinInfo] = useState(undefined)
  let { symbol } = useParams()
  let isFirstRender = useRef(true)
  const makeAPICall = async () => {
      let response = await axios(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_CRYP_KEY}`)
      setCoinInfo(response.data)
      console.log(response)
    }

  useEffect(() => {
    if(isFirstRender.current === true){
      isFirstRender.current = false;
      makeAPICall()
    }
  }, )

  return (
    <div>
      <h1>{symbol}</h1>
      <div className="goingRate">
        {coinInfo === undefined ? "loading..." : coinInfo.rate + " " + coinInfo.asset_id_quote}
      </div>
    </div>
    
  )
}

export default Coin