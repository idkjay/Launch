import React, { useState } from "react";
import FloofTile from "./FloofTile";

const FloofSection = props => {
  const [favoriteFloofId, setFavoriteFloofId] = useState(null)

  let floofs = props.floofs.map(floof => {

    let handleClickFunction = () => {
      if (floof.id === favoriteFloofId) {
        setFavoriteFloofId(null)
      } else {
        setFavoriteFloofId(floof.id)
      }
    }

    let selectedStatus = false
    if (floof.id === favoriteFloofId) {
      selectedStatus = true
    }

    return(
      <FloofTile
        key={floof.id}
        floof={floof}
        handleClickFunction={handleClickFunction}
        selectedStatus={selectedStatus}
      />
    )
  });

  return (
    <div className="container">
      <h2>{`${props.floofType}Floofs`} </h2>
      {floofs}
    </div>
  );
};

export default FloofSection;
