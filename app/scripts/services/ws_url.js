'use strict';

angular.module('WebPuzzleFrontApp')
  .factory('WsUrl', function () {
    var webServiceUrl = 'http://webpuzzlews.herokuapp.com/';

    //Local configuration, removed at build time
    //@exclude
    webServiceUrl = 'http://localhost:3000/';
    //@endexclude

    return webServiceUrl;
  });
