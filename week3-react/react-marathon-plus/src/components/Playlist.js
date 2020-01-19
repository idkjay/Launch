import React from "react"

const Playlist = (props) => {
  return(
    <div
      onClick={props.togglePlaylist}
      className={props.selectedStatus}
    />
        {props.playlistData.name}
    </div>
  )
}

export default Playlist
