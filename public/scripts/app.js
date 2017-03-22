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
    .when('/albums/:id', {
      templateUrl: '/templates/albumShow',
      controller: 'AlbumShowController',
      controllerAs: 'albumShowCtrl'
    })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
