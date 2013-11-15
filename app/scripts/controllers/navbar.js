'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('navBarCtrl', function ($scope, WsUrl, UserService) {
        $scope.authentUrl = WsUrl + 'auth/github/send';

        $scope.user = JSON.parse(UserService.getUserInfo());

        console.log($scope.user)

        $scope.isConnected = function(){
            return UserService.isConnected();
        }

        $scope.signOut = function(){
            UserService.signOut();
        }

        console.log(UserService.isConnected())
});