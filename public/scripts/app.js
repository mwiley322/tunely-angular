console.log('connected to app.js');
 angular
  .module('tunelyApp', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

  function AlbumsIndexController() {
    var vm = this;
    vm.newAlbum = {};
    vm.newAlbum = {
      name: 'All Eyes on Me',
      artistName: 'Tupac'
    };
  }
