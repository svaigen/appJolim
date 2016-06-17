// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers','pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $stateProvider
  .state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'MenuCtrl'
  })

  .state('menu.about', {
    url: "/about",
    views: {
      'menuContent' :{
        templateUrl: "templates/about.html",
        controller: 'AboutCtrl'
      }
    }
  })

  .state('menu.playlist', {
    url: "/playlist",
    views: {
      'menuContent' :{
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('menu.index', {
    url: "/index",
    views: {
      'menuContent' :{
        templateUrl: "templates/index.html",
        controller: 'IndexCtrl'
      }
    }
  })

  .state('menu.preferences', {
    url: "/preferences",
    views: {
      'menuContent' :{
        templateUrl: "templates/preferences.html",
        controller: 'PreferencesCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/menu/index');
});
