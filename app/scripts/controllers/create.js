'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('CreateCtrl', function ($scope, $http) {

    $scope.webComponent = {
        name :"",
        description: "",
        imageLink: "",
        githubLink: "",
        demoLink: ""
    };

    $scope.oldWC = {}

    $scope.saveWC = function(webComponent) {
        $scope.oldWC = angular.copy(webComponent)

        $http({
            method: 'POST',
            url: 'http://webpuzzlews.herokuapp.com/web_components.json',
            data: webComponent
        }).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
            }).
            error(function(data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
            });

    };

        $scope.isUnchanged = function(webComponent) {
            return angular.equals(webComponent, $scope.oldWC)
        }

  });
