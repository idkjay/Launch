import React from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
 //debugger
  return (
    <div className="app row callout">
      <h2 className="title">React Music Player</h2>

      <div className= "columns small-6">
        <PlaylistCollection
        playlists={props.data.playlists}
         />
      </div>

      <div className= "columns small-6">
        <h3>Songs</h3>
        <SongCollection
          songs={props.data.songs}
        />
      </div>

    </div>
  );
}

export default App
