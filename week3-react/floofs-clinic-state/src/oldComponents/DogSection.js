import React from "react"

import DogTile from "./DogTile"

const DogSection = (props) => {

  const dogComponents = props.dogs.map((dogInfo) => {

    const dogClickAlertFunction = (event) => {
      alert(`${dogInfo.human}: ${dogInfo.name}`)
    }

    return(
      <DogTile
        key={dogInfo.id}
        dogData={dogInfo}
        clickCallbackFunction={dogClickAlertFunction}
      />
    )
  })

  return(
    <div className="container">

      <h2> Dog Section </h2>
      {dogComponents}
    </div>
  )
}

export default DogSection
