'use strict';

angular.module('WebPuzzleFrontApp')
  .directive('webComponent', function () {
    return {
      restrict: 'E',
      template: '<div class="wc">' +
                    '<div class="wc-image-container">' +
                        '<img ng-src="{{wc.imageLink}}" class="wc-image"/>' +
                    '</div>' +
                    '<div class="wc-text">' +
                        '<h3 class="wc-title">{{wc.name}}</h3>' +
                        '<a href="{{wc.githubLink}}" target="_blank">' +
                            '<div class="fa fa-github fa-2x icon-github">' +
                                '<div class="github-tooltip" tooltip="GitHub repo">' +
                                '</div>' +
                            '</div>' +
                        '</a>' +
                    '<p class="wc-description">{{wc.description}}</p>' +
                    '</div>' +
                '</div>'
    };
  });
