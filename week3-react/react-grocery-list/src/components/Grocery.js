import React from "react"

const Grocery = props => {
  return (
    <li>
      {props.name}
      <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
    </li>
  )
}

export default Grocery
