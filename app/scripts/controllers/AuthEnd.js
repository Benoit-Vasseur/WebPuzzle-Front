'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('AuthendCtrl', function ($scope, $stateParams, UserService, $state) {
    console.log('getting token', $stateParams.finaltoken);

    var promise = UserService.checkToken($stateParams.finaltoken);
    promise.then(
      function success(data) {
        UserService.setToken($stateParams.finaltoken);
        UserService.signIn(JSON.stringify(data.data));
        console.log(UserService.getUserInfo());
        $state.go('app.list');
      },
      function error() {
        $state.go('app.list');
      }
    );

  });
