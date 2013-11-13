'use strict';

angular.module('WebPuzzleFrontApp', ['ui.router', 'ngAnimate', 'ui.bootstrap.buttons', 'ui.bootstrap.tooltip', 'template/tooltip/tooltip-popup.html'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/app/list");
    $urlRouterProvider.when("/", "/app/list");
    $urlRouterProvider.otherwise("/app/list");

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'views/navbar.html',
        controller: 'navBarCtrl'
      })
      .state('app.list',{
        url: '/list',
        templateUrl: 'views/list.html',
        controller: 'MainCtrl'
      })
      .state('app.create',{
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      });
  });
