import React from 'react';

const DogTile = (props) => {
  let shameStatus;

  if(props.dogData.human === "Nick") {
    shameStatus =
      <div className="shame">
        <i className="fa fa-bell"></i>
        <p>SHAAAAAAME</p>
      </div>
  }

  return(
    <div className="tile">
      <h4>Name: {props.dogData.name}</h4>
      <p>Breed: {props.dogData.breed}</p>
      <p>Human: {props.dogData.human}</p>
      {shameStatus}
      <img src={props.dogData.image}width="300"/>
    </div>
  )
}

export default DogTile;
