'use strict';

angular.module('WebPuzzleFrontApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap.buttons', 'ui.bootstrap.tooltip', 'template/tooltip/tooltip-popup.html'])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'MainCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
