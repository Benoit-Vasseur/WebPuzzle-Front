'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('ListCtrl', function ($rootScope, $scope, $http,  WsUrl) {
    $scope.webcomponents = [];
    $scope.wcNumberLimit = 20;
    //getting child state name

    $scope.$on('$stateChangeSuccess',
      function(event, toState){
        var state = toState.name.match(/([^\.]*$)/)[0];
        $scope.viewMode = { state : state};
      });

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

    $scope.selectWC = {fn: function (wc) {
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
        'name': 'Ascending alphabetical order',
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

    $scope.sortingTooltip = {text : ''};

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


    $scope.$watch('selectedFilterType.filter', function (value) {
      $scope.filter.filterObject = {name: '', submitter: ''};
      $scope.filter.filterObject[value] = $scope.filter.text;
    });

    $scope.addMoreComponents = function () {
      $scope.wcNumberLimit = $scope.wcNumberLimit + 20;
    };
  });

