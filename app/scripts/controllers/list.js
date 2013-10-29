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
            error(function (data, status, headers, config) {
            });

        $scope.filter = {text: ""};

        $scope.sortingTypes = [
            {
                "name": "alpha-asc",
                "filter": "name"},
            {
                "name": "alpha-desc",
                "filter" : "-name"},
            {
                "name": "popularity-asc",
                "filter" : "popularity"},
            {
                "name": "popularity-desc",
                "filter" : "-popularity"}
        ];

        $scope.selectedFilter = {"filterExpr" : 'name'};
    });
