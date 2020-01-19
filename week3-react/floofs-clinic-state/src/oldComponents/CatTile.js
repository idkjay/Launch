import React from "react"

const CatTile = (props) => {
  // let { catData, secretMessage } = props

  return(
    <div className="tile">
      <h4> {props.catData.name} </h4>
      <p> {props.catData.personality} </p>
      <p> {props.catData.human}</p>
      <img src={props.catData.image} />
    </div>
  )
}

export default CatTile
