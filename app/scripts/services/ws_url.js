'use strict';

angular.module('WebPuzzleFrontApp')
  .factory('WsUrl', function () {
    var webServiceUrl = 'http://webpuzzlews.herokuapp.com/';
    //var webServiceUrl = 'http://localhost:3000/';
    return webServiceUrl;
  });
