import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';


const LauncherShow = (props) => {
  const [launcher, setLauncher] = useState({})

  let launcherId = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/launcher/${launcherId}`)
      .then(response => response.json())
      .then(body => {
        setLauncher(body)
      })
    }, [])

  return (
    <div className="white">
      <h1>{launcher.name}</h1>
      <h3>{launcher.bio}</h3>


      <h4>
        <Link to="/launchers">List of Famous Launchers</Link>
      </h4>

      <h4>
        <Link to="/">FAQ list</Link>
      </h4>
    </div>
  )
}

export default LauncherShow
