'use strict';

describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('WebPuzzleFrontApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ListCtrl', {
      $scope: scope
    });
  }));

  it('Should contain a sorting type', function () {
    expect(scope.sortingTypes[0].name).toBe('Ascending alphabetical order');
  });
});
