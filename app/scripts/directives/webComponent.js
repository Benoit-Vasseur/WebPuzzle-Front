'use strict';

angular.module('WebPuzzleFrontApp')
  .directive('webComponent', function () {
    return {
      restrict: 'E',
      templateUrl : 'directive_templates/webComponent.html'
    };
  });
