'use strict';

/**
 * @ngdoc overview
 * @name katboxBazaarApp
 * @description
 * # katboxBazaarApp
 *
 * Main module of the application.
 */
angular.module('katboxBazaarApp', ['ui.router']);

angular.module('katboxBazaarApp').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('main', {
    url: '/',
    controller: 'MainCtrl',
    templateUrl: 'views/main.html'
  });

  $urlRouterProvider.otherwise('/');

});
