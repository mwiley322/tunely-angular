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
    }).then(successCallback, errorCallback);

    function successCallback(response) {
      console.log('response for all projects:', response);
      vm.albums = response.data;
    }
    function errorCallback(error) {
      console.log('There was an error getting the data', error);
    }
  }
