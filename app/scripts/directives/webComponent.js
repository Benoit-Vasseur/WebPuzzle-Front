'use strict';

angular.module('WebPuzzleFrontApp')
  .directive('webComponent', function () {
    return {
      restrict: 'E',
      templateUrl: 'directive_templates/webComponent.html',
      link: function (scope, element, attrs) {
        if (attrs.clickable !== undefined) {
          scope.wcClickable = attrs.clickable === 'true';
        } else {
          scope.wcClickable = true;
        }
      }
    };
  });
