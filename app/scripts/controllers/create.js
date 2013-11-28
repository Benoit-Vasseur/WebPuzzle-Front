'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('CreateCtrl', function ($scope, $http, UserService, WsUrl) {

    $scope.wc = {
      name: '',
      description: '',
      imageLink: '',
      githubLink: '',
      demoLink: ''
    };

    var DEFAULT_STATE = 'btn-default';
    var INVALID_STATE = 'btn-danger';
    var VALID_STATE = 'btn-success';

    var DEFAULT_PLACEHOLDER = 'github link';

    $scope.rightGithubLink = false;
    $scope.inputPlaceholder = DEFAULT_PLACEHOLDER;

    $scope.wcForm = {};
    $scope.userRepos = {};
    $scope.wcForm.state = DEFAULT_STATE;
    $scope.wcForm.showHelpBlocks = false;
    $scope.wcForm.submitted = false;

    $scope.oldWC = {};

    $http({
      method: 'GET',
      url: 'https://api.github.com/user/repos?access_token=c5d798621bda55c751ae5df9ec04889c97e7ec31'
    }).success(function (data) {
        $scope.userRepos = data;
      });


    $scope.changeInputPlaceholder = function (link) {
      $scope.inputPlaceholder = link;
    };

    $scope.giveGithubLink = function () {
      $scope.rightGithubLink = true;
    };

    $scope.removeGithubLink = function () {
      $scope.rightGithubLink = false;
      $scope.wc.githubLink = '';
    };

    $scope.submitFormOnOver = function () {

    };

    $scope.checkFormOnOver = function () {
      if ($scope.webComponentForm.$invalid) {
        $scope.wcForm.state = INVALID_STATE;
      } else {
        $scope.wcForm.state = VALID_STATE;
      }
    };

    $scope.submitFormOnLeave = function () {
      if ($scope.wcForm.showHelpBlocks === false) {
        $scope.wcForm.state = DEFAULT_STATE;
      } else {

      }
    };

    $scope.askGithub = function (githubUrl) {
      var regexp = /https:\/\/github.com\/(.*)/g;
      var apiUrl = '';
      try {
        apiUrl = regexp.exec(githubUrl)[1];
      } catch (e) {
        $scope.rightGithubLink = false;
      }
      $http({
        method: 'GET',
        url: 'https://api.github.com/repos/' + apiUrl
      }).success(function (data) {
          console.log(data);
          $scope.wc.name = data.name;
          $scope.wc.description = data.description;
          $scope.rightGithubLink = true;
        }).error(function (data) {
          console.log('erreur ' + data);
          $scope.rightGithubLink = false;
        });
    };

    $scope.saveWC = function (webComponent) {
      $scope.oldWC = angular.copy(webComponent);

      if ($scope.webComponentForm.$valid) {
        $http({
          method: 'POST',
          url: WsUrl + 'web_components.json',
          data: webComponent,
          params: {auth_token: UserService.getToken()}
        }).
          success(function (data, status) {
            $scope.status = status;
            $scope.data = data;
          }).
          error(function (data, status) {
            $scope.data = data || 'Request failed';
            $scope.status = status;
          });

      } else {
        $scope.wcForm.submitted = true;
      }

    };

    $scope.isUnchanged = function (webComponent) {
      return angular.equals(webComponent, $scope.oldWC);
    };

  });
