'use strict';

angular.module('WebPuzzleFrontApp')
  .factory('GithubService', function ($http) {
    var githubApiUrl = 'https://api.github.com/';

    return {
      checkRepo: function(user, repo) {
        return $http({
          method: 'GET',
          url: githubApiUrl+'repos/'+user+'/'+repo
        });
      },
      giveUserAndRepoFromUrl: function(githuRepobUrl) {
        var regExp = /https:\/\/github.com\/(.+)\/(.+)/g;
        var resultRegExp = regExp.exec(githuRepobUrl);

        if(resultRegExp === null) { return false; }

        return {
          user: resultRegExp[1],
          repo: resultRegExp[2]
        };
      }
    };

  });
