import React from "react"

const StepTile = props => {
  return <li className={props.className} onClick={props.setSelectedStepClosure}>{props.step}</li>
}

export default StepTile
