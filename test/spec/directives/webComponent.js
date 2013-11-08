'use strict';

describe('Directive: webComponent', function () {

  // load the directive's module
  beforeEach(module('WebPuzzleFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<web-component></web-component>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the webcomponent directive');
  }));
});
