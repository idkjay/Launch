import React from "react"
import ReactDOM from "react-dom"

import style from "./styles/app.scss"

import Box from "./components/Box"
import Wrapper from "./components/Wrapper"
import Picture from "./components/Picture"
import List from "./components/List"
import Numbers from "./components/Numbers"

let wrapperParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

ReactDOM.render(
  <div>
    <Wrapper
      boxClass='wrapper'
      header="I Am the Wrapper"
      paragraph={wrapperParagraph}
    />

  </div>,
  document.getElementById("app")
)
