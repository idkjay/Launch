import './main.scss'
import React from "react"
import ReactDOM from "react-dom"

const roarAtMe = () => {
  alert('Roar!')
}

const headerElement = (
  <h1  id="special-header" className="header" onClick={roarAtMe}>
    I am a React element! Hear me roar!
  </h1>
);
ReactDOM.render(headerElement, document.getElementById("app"))
