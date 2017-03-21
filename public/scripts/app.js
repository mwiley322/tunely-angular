console.log('connected to app.js');
 angular
  .module('tunelyApp', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

  function AlbumsIndexController() {
    var vm = this;
    vm.newAlbum = {};
    vm.newAlbum = {
      name: 'Speak for Yourself',
      artistName: 'Imogen Heap',
      releaseDate: 'July 18, 2005',
      genres: [
        'Pop', 'Rock', 'Electronica', 'Alternative rock'
      ],
      songs: [
        'Headlock', 'Have You Got it in You?', 'Goodnight and Go', 'Loose Ends',
        'Hide and Seek', 'Daylight Robbery', 'The Walk', 'Clear the Area'
      ]
    };
    vm.albums = [
      {
        name: 'Speak for Yourself',
        artistName: 'Imogen Heap',
        releaseDate: 'July 18, 2005',
        genres: [
          'Pop', 'Rock', 'Electronica', 'Alternative rock'
        ],
        songs: [
          'Headlock', 'Have You Got it in You?', 'Goodnight and Go', 'Loose Ends',
          'Hide and Seek', 'Daylight Robbery', 'The Walk', 'Clear the Area'
        ]
      },
      {
        name: 'Vava Voom',
        artistName: 'Bassnectar',
        releaseDate: 'April 10, 2012',
        genres: [
          'Dubstep', 'Electronica', 'Glitch', 'Bass music', 'Trip hop'
        ],
        songs: [
          'Vava Voom', 'Empathy', 'Ugly', 'Upside Down'
        ]
      },
      {
        name: 'Dive',
        artistName: 'Tycho',
        releaseDate: 'November 8, 2011',
        genres: [
           'Downtempo', 'Chill-out', 'Chillwave', 'Instrumental', 'Indie'
        ],
        songs: [
          'Daydream', 'A Walk', 'Hours'
        ]
      },
      {
        name: 'Rumors',
        artistName: 'Fleetwood Mac',
        releaseDate: 'February 4, 1977',
        genres: [
          'Rock', 'Pop', 'Rock and roll', 'Pop rock', 'Soft rock'
        ],
        songs: [
          'Dreams', 'Never Going Back Again', 'The Chain', 'You Make Loving Fun', 'Go Your Own Way', 'Gold Dust Woman'
        ]
      }
    ];
  }
