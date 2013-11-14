'use strict';

angular.module('WebPuzzleFrontApp')
  .factory('WsUrl', function () {
    var webServiceUrl = 'http://webpuzzlews.herokuapp.com/';

    return webServiceUrl;
  });
