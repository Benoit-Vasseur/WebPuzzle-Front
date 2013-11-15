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

        $scope.oldWC = {};

        $scope.saveWC = function (webComponent) {
            $scope.oldWC = angular.copy(webComponent);

            $http({
                method: 'POST',
                url: WsUrl + 'web_components.json',
                data: webComponent,
                params: {access_token: UserService.getToken()}
            }).
                success(function (data, status) {
                    $scope.status = status;
                    $scope.data = data;
                }).
                error(function (data, status) {
                    $scope.data = data || 'Request failed';
                    $scope.status = status;
                });

        };

        $scope.isUnchanged = function (webComponent) {
            return angular.equals(webComponent, $scope.oldWC);
        };

    });
