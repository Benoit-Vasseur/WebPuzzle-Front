'use strict';

angular.module('WebPuzzleFrontApp', ['ui.router', 'ngDisqus', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.buttons', 'ui.bootstrap.tooltip', 'template/tooltip/tooltip-popup.html'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $disqusProvider) {
    $disqusProvider.setShortname('webpuzzle');

    $locationProvider.hashPrefix('!');

    $urlRouterProvider.when('', '/app/list');
    $urlRouterProvider.when('/', '/app/list');
    $urlRouterProvider.when('/app/detail/', '/app/list');
    $urlRouterProvider.otherwise('/app/list');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'views/navbar.html',
        controller: 'navBarCtrl'
      })
      .state('app.authtoken', {
        url: '^/auth/:provider/end/:finaltoken',
        controller: 'AuthendCtrl'
      })
      .state('app.list', {
        url: '/list',
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .state('app.create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .state('app.detail', {
        url: '/detail/:id',
        templateUrl: 'views/wcDetailedView.html',
        controller: 'wcDetailedViewCtrl'
      });
  });
