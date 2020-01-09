import React, { useState, useEffect } from "react"

import CerealTile from "./CerealTile"
import { Link } from 'react-router-dom';


const CerealsIndexPage = (props) => {
  const [cereals, setCereals] = useState([])
  debugger

  useEffect(() => {
    fetch("/api/v1/cereals")
      .then(response => response.json())
      .then(cereals => {
        setCereals(cereals)
      })
  }, [])

  let cerealTiles = cereals.map(cereal => {
    return <CerealTile key={cereal.id} cereal={cereal} />
  })

  return (
    <div className="center-bg">
      <h3 className="so-great">Cereals Are Great</h3>
      <Link to="/milks">So are milks!</Link>

      {cerealTiles}
    </div>
  )
}

export default CerealsIndexPage
