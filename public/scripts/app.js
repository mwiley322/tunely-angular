console.log('connected to app.js');
 angular
  .module('tunelyApp', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

  function AlbumsIndexController() {
    var vm = this;
    vm.newAlbum = {};
    vm.newAlbum = {
      name: 'Speak for Yourself',
      artistName: 'Imogen Heap'
    };
    vm.albums = [
      {
        name: 'VaVaVoom',
        artistName: 'Bassnectar'
      },
      {
        name: 'Dive',
        artistName: 'Tycho'
      },
      {
        name: 'Rumors',
        artistName: 'Fleetwood Mac'
      }
    ];
  }
