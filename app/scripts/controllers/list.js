'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('MainCtrl', function ($scope, $http, WsUrl) {
        $scope.webcomponents = [];

        //Get data from webservice
        $http({
            method: 'GET',
            url: WsUrl + 'web_components.json'
        }).
            success(function (data, status, headers, config) {
                $scope.webcomponents = data;
            }).
            error(function (data, status, headers, config) {});
  });
