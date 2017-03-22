angular
  .module('tunelyApp')
  .controller('AlbumShowController', AlbumShowController);

  AlbumShowController.$inject = ['$http', '$routeParams'];

  function AlbumShowController( $http, $routeParams ) {
    var vm = this;
    vm.newSong = {};
    console.log('routes: ', $routeParams);
    $http({
      method: 'GET',
      url: '/api/albums/' + $routeParams.id
    }).then(function successSingleAlbumShow(json) {
      console.log('successfully grabbed a single album', json.data);
      vm.album = json.data;
    }, function errorSingleAlbumShow(error) {
      console.log('Error getting a single albums data!', error);
    });

  }
