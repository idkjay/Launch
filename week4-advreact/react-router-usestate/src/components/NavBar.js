import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import CerealsIndexPage from "../components/CerealsIndexPage"
import MilksIndexPage from "../components/MilksIndexPage"
import CerealShowPage from "../components/CerealShowPage"

const NavBar = props => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">All Cereals</Link>
        <Link to="/milks">All Milks</Link>
      </div>

      <div className="content">
        <h1 className="page-title">Cereals</h1>
      </div>

      <div>(Child components go here!)</div>
      <Switch>
        <Route exact path="/" component={CerealsIndexPage} />
        <Route exact path="/cereals/:id" component={CerealShowPage} />
        <Route exact path="/milks" component={MilksIndexPage} />
      </Switch>

      <div className="navbar">
        <p> I'm a feeter</p>
      </div>
    </div>
  )
}

export default NavBar
