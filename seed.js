var db = require("./models");

var albumList =[];
albumList.push({
                name: 'Vava Voom',
                artistName: 'Bassnectar',
                releaseDate: 'April 10, 2012',
                genres: [
                  'Dubstep', 'Electronica', 'Glitch', 'Bass music', 'Trip hop'
                ]
                // songs: [
                //   'Vava Voom', 'Empathy', 'Ugly', 'Upside Down'
                // ]
            });
albumList.push({
              name: 'Speak for Yourself',
              artistName: 'Imogen Heap',
              releaseDate: 'July 18, 2005',
              genres: [
                'Pop', 'Rock', 'Electronica', 'Alternative rock'
              ]
              // songs: [
              //   'Headlock', 'Have You Got it in You?', 'Goodnight and Go', 'Loose Ends',
              //   'Hide and Seek', 'Daylight Robbery', 'The Walk', 'Clear the Area'
              // ]
            });
albumList.push({
              name: 'Dive',
              artistName: 'Tycho',
              releaseDate: 'November 8, 2011',
              genres: [
                 'Downtempo', 'Chill-out', 'Chillwave', 'Instrumental', 'Indie'
              ]
              // songs: [
              //   'Daydream', 'A Walk', 'Hours'
              // ]
            });
albumList.push({
              name: 'Rumors',
              artistName: 'Fleetwood Mac',
              releaseDate: 'February 4, 1977',
              genres: [
                'Rock', 'Pop', 'Rock and roll', 'Pop rock', 'Soft rock'
              ]
              // songs: [
              //   'Dreams', 'Never Going Back Again', 'The Chain', 'You Make Loving Fun', 'Go Your Own Way', 'Gold Dust Woman'
              // ]
            });

var sampleSongs = [];

sampleSongs.push({ name: 'Swamped',
                   trackNumber: 1
});
sampleSongs.push({ name: "Heaven's a Lie",
                   trackNumber: 2
});
sampleSongs.push({ name: 'Daylight Dancer',
                   trackNumber: 3
});
sampleSongs.push({ name: 'Humane',
                   trackNumber: 4
});
sampleSongs.push({ name: 'Self Deception',
                   trackNumber: 5
});
sampleSongs.push({ name: 'Aeon',
                   trackNumber: 6
});
sampleSongs.push({ name: 'Tight Rope',
                   trackNumber: 7
});


// populate each albums song list
albumList.forEach(function(album) {
  album.songs = sampleSongs;
});


db.Album.remove({}, function(err, albums){

  db.Album.create(albumList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");
    process.exit();
  });

});
