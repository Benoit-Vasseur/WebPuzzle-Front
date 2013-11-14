'use strict';

angular.module('WebPuzzleFrontApp')
    .controller('MainCtrl', function ($scope, $http, WsUrl, UserService, $location) {
        $scope.webcomponents = [];
        //Get data from webservice
        $http({
            method: 'GET',
            url: WsUrl + 'web_components.json'
        }).
            success(function (data) {
                $scope.webcomponents = data;
            }).
            error(function () {
            });

        $scope.selectWC = {fn :  function(wc){
            console.log( wc);
            console.log($scope);
            console.log($rootScope);
            $rootScope.selectedWC = wc;
        }};

        $scope.filter = {
            text: '',
            filterObject: {
                name: '',
                submitter: ''
            }
        };

        $scope.sortingTypes = [
            {
                'name': 'ascending alphabetical order',
                'iconCss': 'fa fa-sort-alpha-asc',
                'filter': 'name'
            },
            {
                'name': 'Descending alphabetical order',
                'iconCss': 'fa fa-sort-alpha-desc',
                'filter': '-name'
            },
            {
                'name': 'Descending popularity order',
                'iconCss': 'fa fa-sort-amount-desc',
                'filter': '-popularity'
            },
            {
                'name': 'Ascending popularity order',
                'iconCss': 'fa fa-sort-amount-asc',
                'filter': 'popularity'
            }
        ];

        $scope.selectedSorting = {sortingFilterExpr: 'name'};

        $scope.filterTypes = [
            {
                name: 'By name',
                filter: 'name'
            },
            {
                name: 'By author',
                filter: 'submitter'
            }
        ];

        $scope.selectedFilterType = {filter: 'name'};

        $scope.$watch('filter.text', function (value) {
            $scope.filter.filterObject = {name: '', submitter: ''};
            $scope.filter.filterObject[$scope.selectedFilterType.filter] = value;
        });


        if($location.$$search.auth_token){
            UserService.setToken($location.$$search.auth_token)
        }

        $scope.$watch('selectedFilterType.filter', function (value) {
            $scope.filter.filterObject = {name: '', submitter: ''};
            $scope.filter.filterObject[value] = $scope.filter.text;
        });

    });
