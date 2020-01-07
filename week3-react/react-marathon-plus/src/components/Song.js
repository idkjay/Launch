import React from "react"

const Song = props => {

  return(
    <div onClick = {props.handleClick} className= {props.selected}>
      {props.songData.name} - {props.songData.artist}
    </div>
  )
}

export default Song;
