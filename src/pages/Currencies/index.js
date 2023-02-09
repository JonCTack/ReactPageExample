import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Currencies = () => {
  const [currencies, ] = useState([
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ]);

  const navigate = useNavigate()

  const handleClick = (symbolOfItem) => {
    navigate(`/coin/${symbolOfItem}`)
  }

  let listOfCoins = currencies.map(el => {
    return <p onClick={() => handleClick(el.symbol)} className="coinClick" key={JSON.stringify(el)}> {el.name} </p>
  })
  return (
    <div>
      <h1>Currencies</h1>
      <ul className="coinList">
      {listOfCoins}
      </ul>
    </div>
  )
}

export default Currencies