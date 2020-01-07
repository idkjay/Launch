import React from "react"
import CatTile from './CatTile';

const CatSection = (props) => {

  const catBoxes = props.catInfo.map((catObject) => {
    return(
      <CatTile
        key={catObject.id}
        catData={catObject}
        message="Cats are totally awesome."
      />
    )
  });

  return(
    <div className="container">
      <h2>Cat Section</h2>
      {catBoxes}
    </div>
  )
}

export default CatSection;
