'use strict';

describe('Controller: AuthendCtrl', function () {

  // load the controller's module
  beforeEach(module('WebPuzzleFrontApp'));

  var AuthendCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthendCtrl = $controller('AuthendCtrl', {
      $scope: scope
    });
  }));

  it('should do nothing', function () {
    expect(true).toBe(true);
  });
});
