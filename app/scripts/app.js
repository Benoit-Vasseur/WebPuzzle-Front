'use strict';

angular.module('WebPuzzleFrontApp', ['ngRoute', 'ui.bootstrap.buttons', 'ui.bootstrap.tooltip', 'template/tooltip/tooltip-popup.html'])
  .config(function ($routeProvider) {
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
