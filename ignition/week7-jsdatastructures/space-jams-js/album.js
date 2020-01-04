let TRACKS = require('./space-jams-tracks');

class Album {
  constructor(id, title, artists, tracks) {
    this.id = id;
    this.title = title;
    this.artists = artists;
    this.tracks = [];

  };
  durationMin() {
    let totalAlbumLen = 0.00;
    for (let i = 0; i < this.tracks.length; i++) {
      let j = parseFloat(this.tracks[i].duration_ms);
      j /= (1000.00*60.00);
      totalAlbumLen += j;
    }
    return Math.round((totalAlbumLen)*100)/100;



  };
  summary() {
    let s = "Name: " + this.title + "\nArtist(s): " + this.artists + "\nDuration (min.): " + this.durationMin() + "\nTracks:\n"


    // console.log(`Name: ${this.title}\nArtist(s): ${this.artists}\nDuration (min.): \nTracks:`);
    let trackList = this.tracks.map(function(song) {
      s += '- '+ song.title + '\n'

      // console.log('-' + song.title);
    }); return s

    // this.tracks.forEach((song) => {
    //   console.log('-' + song.title);
    // });

  }
}



module.exports = Album;
