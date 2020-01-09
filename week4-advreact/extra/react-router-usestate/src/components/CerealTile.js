import React from "react"
import { Link } from "react-router-dom"

const CerealTile = props => {
  const {id, name} = props.cereal
  debugger
  return (
    <div className="cereal">
      <h2>{name}</h2>
      <Link to={`/cereals/${id}`}>{name}</Link>
    </div>
  )
}

export default CerealTile
