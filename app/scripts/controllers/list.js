'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('MainCtrl', function ($scope, $http) {
        $scope.webcomponents = [];

        //Get data from webservice
        $http({
            method: 'GET',
            url: 'http://webpuzzlews.herokuapp.com/web_components.json'
        }).
            success(function (data, status, headers, config) {
                $scope.webcomponents = data;
            }).
            error(function (data, status, headers, config) {});
  });
