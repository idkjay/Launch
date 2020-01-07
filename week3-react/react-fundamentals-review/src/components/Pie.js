import React, {useState} from "react"

const Pie = props => {
  const { name, selectedStatus } = props

  let pieClassName;
  if (props.selectedStatus === true) {
    pieClassName = "selected"
  }

  return (
    <li onClick={props.handlePieClick} className={pieClassName}>
      {name}
    </li>
  )
}

export default Pie
