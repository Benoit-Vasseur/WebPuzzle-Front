'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('CreateAdditionalInfoCtrl', function ($scope, $http, $state, $stateParams, GithubService, UserService, WsUrl) {

    $scope.wc = {
      name: '',
      description: '',
      imageLink: '',
      githubLink: '',
      demoLink: '',
      author: ''
    };

    $scope.user = $stateParams.userName;
    $scope.repo = $stateParams.repo;

    GithubService.checkRepo($scope.user, $scope.repo)
      .success(function (data) {
      console.log('OK');
        $scope.wc.name = data.name;
        $scope.wc.description = data.description;
        $scope.wc.githubLink = data.html_url;
        $scope.wc.author = data.owner.login;
        console.log(data);
    }).error(function(data) {
        console.log('NO');
        $scope.goBack();
    })

    $scope.goBack = function () {
      $state.go('app.create.github');
    };


    $scope.saveWC = function (webComponent) {

      if ($scope.webComponentForm.$valid) {
        $http({
          method: 'POST',
          url: WsUrl + 'web_components.json',
          data: webComponent,
          params: {auth_token: UserService.getToken()}
        }).
          success(function (data, status) {
            $state.go('app.list');
          }).
          error(function (data, status) {
            $scope.data = data || 'Request failed';
            $scope.status = status;
          });
      }

    };



  });
