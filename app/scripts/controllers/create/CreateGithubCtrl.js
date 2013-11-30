'use strict';

angular.module('WebPuzzleFrontApp')
  .controller('CreateGithubCtrl', function ($scope, $http, $state, GithubService, UserService) {

    $scope.wc = {};
    $scope.wc.githubLink = '';

    $http({
      method: 'GET',
      url: 'https://api.github.com/user/repos?access_token='+UserService.getToken()
    }).success(function (data) {
        $scope.userRepos = data;
      });

    $scope.submitForm = function (githubRepoUrl) {

      var repoInfo = GithubService.giveUserAndRepoFromUrl(githubRepoUrl);

      GithubService.checkRepo(repoInfo.user, repoInfo.repo)
        .success (function (data) {
        $state.go('app.create.additionalInfo',{userName: repoInfo.user, repo: repoInfo.repo});
      }).error (function (data) {
        console.log('NO');
      })
    }

    $scope.goToAdditionalInfo = function (user, repo) {
      $state.go('app.create.additionalInfo',{userName: user, repo: repo});
    }

  });
