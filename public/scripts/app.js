console.log("sanity check");
angular
  .module('tunelyApp', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController( $http ) {
    var vm = this;
    vm.newAlbum = {};

    $http({
      method: 'GET',
      url: '/api/albums'
    }).then(getAllAlbums, errorGettingAllAlbums);

    function getAllAlbums(response) {
      console.log('response for all projects:', response);
      vm.albums = response.data;
    }

    function errorGettingAllAlbums(error) {
      console.log('There was an error getting the data', error);
    }

    vm.createAlbum = function() {
      $http({
        method: 'POST',
        url: '/api/albums',
        data: vm.newAlbum
      }).then(successNewAlbum, errorNewAlbum);
    }

    function successNewAlbum(response) {
      vm.albums.unshift(response.data);
    }

    function errorNewAlbum(error) {
      console.log('There was an error posting the data: ', error);
    }

    vm.deleteAlbum = function (album) {
      $http({
        method: 'DELETE',
        url: '/api/albums/'+ album._id
      }).then(successDeletedAlbum, errorDeletingAlbum);
    }

    function successDeletedAlbum(response) {
      var index = vm.albums.indexOf(response);
      console.log('index is: '+ index);
      vm.albums.splice(index,1);
    }

    function errorDeletingAlbum(error) {
      console.log('There was an error deleting the data: ', error);
    }

  }
