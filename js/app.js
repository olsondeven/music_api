var noServerProject = angular.module('noServerProject', ['ui.router']);

noServerProject.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './views/login.html',
            controller: 'loginCtrl'
        })
        .state('createAcct', {
            url: '/createAcct',
            templateUrl: './views/createAcct.html',
            controller: 'loginCtrl'
        })
        // .state('home', {
        //     url: '/home',
        //     templateUrl: './views/home.html',
        //     controller: 'mainCtrl'
        // })
        .state('artist',{
          url: '/artist',//and the artist name to the back of this
          templateUrl: './views/artist.html',
          contorller: 'artistCtrl'
        })
        .state('album',{
          url: '/album',
          templateUrl: './views/album.html',
          controller: 'albumCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: './views/search.html',
            controller: 'mainCtrl'
        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: './views/favorites.html',
            controller: 'favCtrl'
        })
        .state('midiPage',{
          url: '/midiPage',
          templateUrl: './views/midiPage.html'
        });
            $urlRouterProvider.otherwise('login');

}); //closing
