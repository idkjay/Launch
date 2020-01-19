import React from "react"
import DogTile from './DogTile';

const DogSection = (props) => {
  return(
    <div className="container">
      <h2>Dog Section</h2>
      <DogTile
        dogData={props.dogsInfo[0]}
      />

      <DogTile
        dogData={props.dogsInfo[1]}
      />

      <DogTile
        dogData={props.dogsInfo[2]}
      />
    </div>
  )
}

export default DogSection;
