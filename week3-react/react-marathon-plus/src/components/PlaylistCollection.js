import React, {useState} from 'react'
import Playlist from './Playlist.js'

const PlaylistCollection = props => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

  let playlistTiles = props.playlists.map((playlist) => {
    const togglePlaylist = () => {
      setSelectedPlaylistId(playlist.id)
    }

    let selectedStatus = ""
    if(playlist.id === selectedPlaylistId) {
      selectedStatus = "selected"
    }

    return(
      <Playlist
        key={playlist.id}
        playlistData={playlist}
        togglePlaylist={togglePlaylist}
        selectedStatus={selectedStatus}
      />
    )
  })

  return (
    <div>
      <h3>Playlists</h3>
        <div>
          {playlistTiles}
        </div>
    </div>
  )

}

export default PlaylistCollection
