'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('navBarCtrl', function ($scope, WsUrl, UserService) {
    $scope.authentUrl = WsUrl + 'auth/github/send';

    $scope.user = JSON.parse(UserService.getUserInfo());

    console.log($scope.user);

    $scope.isConnected = function () {
      return UserService.isConnected();
    };

    $scope.signOut = function () {
      UserService.signOut();
    };

    $scope.$on('$stateChangeSuccess',
      function(event, toState){
        if (toState.name === 'app.list') {
          $scope.user = JSON.parse(UserService.getUserInfo());
        }
      });
  });