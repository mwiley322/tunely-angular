console.log("sanity check");
//app.js is now index for controllers

angular
  .module('tunelyApp', ['ngRoute'])
  .config(config);

  config.$inject= ['$routeProvider', '$locationProvider'];

  function config( $routeProvider, $locationProvider ) {
    $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controller: 'AlbumsIndexController',
      controllerAs: 'albumsIndexCtrl'
    })
    // .when('/:id', {
    //   templateUrl: '/templates/albums-show',
    //   controller: 'AlbumsShowController',
    //   controllerAs: 'albumsShowCtrl'
    // })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
