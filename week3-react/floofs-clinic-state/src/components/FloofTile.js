import React from "react";

const FloofTile = props => {
  let details = "";
  if (props.floof.breed) {
    details = props.floof.breed;
  } else {
    details = props.floof.personality;
  }

  let classes = "tile"
  if (props.selectedStatus) {
    classes += " bestest-floof"
  }

  return (
    <div className={classes} onClick={props.handleClickFunction}>
      <h3>
        {props.floof.name} ({props.floof.human})
      </h3>
      <p>
        <i> {details} </i>
      </p>
      <img src={props.floof.image} />
    </div>
  );
};

export default FloofTile;
