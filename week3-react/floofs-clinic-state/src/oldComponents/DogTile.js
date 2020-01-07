import React from "react"

const DogTile = (props) => {
  // debugger
  let shameStatus

  if (props.dogData.human === "Nick"){
    shameStatus = <p className="shame"> SHAME! SHAME! *BELL RING* </p>
  }

  return(
    <div className="tile" onClick={props.clickCallbackFunction}>
      <h4> {props.dogData.name} </h4>
      <p> {props.dogData.breed} </p>
      <p> {props.dogData.human} </p>
      {shameStatus}
      <img src={props.dogData.image} width="300"/>
    </div>
  )
}

export default DogTile
