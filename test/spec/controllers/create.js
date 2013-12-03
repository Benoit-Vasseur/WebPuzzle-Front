'use strict';

describe('Controller: CreateCtrl', function () {

  // load the controller's module
  beforeEach(module('WebPuzzleFrontApp'));

  var CreateGithubCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateGithubCtrl = $controller('CreateGithubCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.wc.githubLink).toBe('');
  });
});
