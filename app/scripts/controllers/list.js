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
                "name": "ascending alphabetical order",
                "iconCss": "fa fa-sort-alpha-asc",
                "filter": "name"},
            {
                "name": "Descending alphabetical order",
                "iconCss": "fa fa-sort-alpha-desc",
                "filter" : "-name"},
            {
                "name": "Descending popularity order",
                "iconCss": "fa fa-sort-amount-desc",
                "filter" : "-popularity"},
            {
                "name": "Ascending popularity order",
                "iconCss": "fa fa-sort-amount-asc",
                "filter" : "popularity"}
        ];

        $scope.selectedSorting = {"sortingFilterExpr" : 'name'};

    });
