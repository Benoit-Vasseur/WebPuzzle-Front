'use strict';

var GITHUB_REPO_REGEXP = /https:\/\/github.com\/.+\/.+/;

angular.module('WebPuzzleFrontApp')
  .directive('githubRepoLink', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (GITHUB_REPO_REGEXP.test(viewValue)) {
            ctrl.$setValidity('githubRepo', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('githubRepo', false);
            return undefined;
          }
        });
      }
    };
  });
