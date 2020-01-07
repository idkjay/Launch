import './main.scss'

import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header"
const roarAtMe = () => {
  alert('Roar!')
}
const fk ='fk ur mom'
const headerElement = (
  <h1  id="special-header" className="header" onClick={roarAtMe}>
    {fk}
  </h1>
);

ReactDOM.render(<Header />, document.getElementById("app"))
