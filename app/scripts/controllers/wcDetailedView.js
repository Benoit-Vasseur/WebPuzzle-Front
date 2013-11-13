'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('wcDetailedViewCtrl', function ($scope,$rootScope, $stateParams, $http, WsUrl) {
    $scope.wc = {
      id: $stateParams.id
    }

    if(!$scope.selectedWC){}
    $http({
      method: 'GET',
      url: WsUrl + 'web_components/' + $scope.wc.id + '.json'
    }).
      success(function (data) {
        $rootScope.selectedWC = data;
      }).
      error(function () {
      });
  });