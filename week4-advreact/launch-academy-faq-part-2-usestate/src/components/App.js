import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import FAQContainer from "./FAQContainer.js"
import LauncherList from "./LauncherList.js"
import LauncherShow from "./LauncherShow.js"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={FAQContainer} />
        <Route exact path ="/launchers" component={LauncherList} />
        <Route exact path ="/launchers/:id" component={LauncherShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
