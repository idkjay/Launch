import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])
  useEffect(() => {
    fetch("/api/v1/launchers").then(response => response.json()).then(launchers => {
      setLaunchers(launchers)
    })
  }, [])

  const launcherList = launchers.map((launcher) => {
    return (<li key={launcher.id}>
      <Link to={`/launchers/${launcher.id}`}>{launcher.name}</Link>
    </li>)
  })

  return (<div>

    <ul>
      <h1>{launcherList}</h1>
    </ul>

    <h4>
      <Link to="/">FAQ list</Link>
    </h4>

  </div>)
}

export default LauncherList;
