// Popup.js
import React from "react"

const Popup = props => {
  let handleExit = () => {
    confirm(`Are you sure you don't want to see ${props.artist}?`)
  }
  let submitEmail = () => {
    console.log("Form submitted")
  }

  return(
    <div className = "medium-12 columns">
      <div className = "callout secondary" id = "box">
        <div align = "right" onClick={handleExit}>
          <i className ="fas fa-times"></i>
        </div>
        <h1 className = "text-center">You have won tickets to see {props.artist}!!</h1>
        <h3 className = "text-center">Please enter your email so we can send you the tickets</h3>

        <form>
          <div onClick={submitEmail}>
          <label>
            <input type = "text" name = "title" id = "title" placeholder = "Your email here"></input>
          </label>
          <input className = "text-center" type = "submit" value = "CLAIM YOUR PRIZE" id = "button"></input>
          </div>
        </form>
      </div>
    </div>


  );
};

export default Popup
