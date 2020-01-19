import React, {useState} from 'react'

import Song from './Song'

const SongCollection = props => {
let [selectedSongId,setSelectedSongId] = useState(null)


let songTiles = props.songs.map ((song) => {

let handleClick = () =>{
  setSelectedSongId(song.id)
}
let selected = ""
if(selectedSongId === song.id){
  selected = "selected"
}

  return (
    <Song
    key={song.id}
    songData={song}
    handleClick={handleClick}
    selected={selected}
    />
  )

})


  return(
    <div>
      {songTiles}
    </div>
  )
}

export default SongCollection
