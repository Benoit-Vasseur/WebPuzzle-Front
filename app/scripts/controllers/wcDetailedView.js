'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('wcDetailedViewCtrl', function ($scope,$stateParams) {
    $scope.wc = {
      id: $stateParams.id
    }



  });