'use strict';

angular.module('WebPuzzleFrontApp', ['ui.router', 'ngDisqus', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.buttons', 'template/tooltip/tooltip-popup.html'])
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
      .state('app.create', {
        abstract: true,
        templateUrl: 'views/create/create.html'
      })
      .state('app.create.github', {
        url: '/create/github',
        templateUrl: 'views/create/github.html',
        controller: 'CreateGithubCtrl'
      })
      .state('app.create.additionalInfo', {
        url: '/create/additionalInfos/:userName/:repo',
        templateUrl: 'views/create/additionalInfo.html',
        controller: 'CreateAdditionalInfoCtrl'
      })
      .state('app.list', {
        url: '/list',
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .state('app.list.detail', {
        url: '/detail/:id',
        templateUrl: 'views/detail.html',
        controller: 'wcDetailedViewCtrl'
      });
  });
