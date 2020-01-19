import React from 'react';

const CatTile = (props) => {
  let { catData, message} = props

  return(
    <div className="tile">
      <h4>Name: {catData.name}</h4>
      <p>Personality: {catData.personality}</p>
      <p>Human: {catData.human}</p>
      <p>{message}</p>
      <img src={catData.image}width="300"/>
    </div>
  )
}

export default CatTile;
