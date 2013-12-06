'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('wcDetailedViewCtrl', function ($scope,$rootScope, $stateParams, $http, $sce, WsUrl) {
    $scope.wc = {
      id: $stateParams.id
    };

    function createDemoLinkUrl(){
      $rootScope.selectedWC.demoLinkUrl = $rootScope.selectedWC.demoLink + 'embedded/result,js,html,css/';
      $rootScope.selectedWC.demoLinkUrl = $sce.trustAsResourceUrl($rootScope.selectedWC.demoLinkUrl);
      //@exclude
      console.log('demoLinkUrl = ' + $rootScope.selectedWC.demoLinkUrl);
      //@endexclude
    }

    if(!$scope.selectedWC){
      $http({
        method: 'GET',
        url: WsUrl + 'web_components/' + $scope.wc.id + '.json'
      }).
        success(function (data) {
          $rootScope.selectedWC = data;
          createDemoLinkUrl();
        }).
        error(function () {
      });
    } else {
      console.log($rootScope.selectedWC);
      if ($scope.selectedWC.demoLink){
        if ($scope.selectedWC.demoLink.search('embedded/') === -1){
          createDemoLinkUrl();
        }
      }
    }
  });