import React from "react"
import { Switch, Route, Link } from "react-router-dom"

import Greeting from "../components/Greeting"
import Goodbye from "../components/Goodbye"
import CustomGreeting from "../components/CustomGreeting"


const NavBar = props => {
  return (
    <div>

      <div className="navbar">
        <Link to="/">Get a greeting from Ron Swanson!</Link>
      </div>

      <div className="navbar">
        <Link to="/goodbye">Get a farewell from Ron Swanson!</Link>
      </div>

      <div className="navbar">
        <Link to="/customgreeting">Get a custom greeting from Ron Swanson!</Link>
      </div>


      <Switch>
        <Route exact path="/" component={Greeting} />
        <Route exact path="/goodbye" component={Goodbye} />
        <Route exact path="/customgreeting" component={CustomGreeting} />
      </Switch>

      <div className="navbar">
        <p> yoyoyoyo</p>
      </div>
    </div>
  )
}

export default NavBar
