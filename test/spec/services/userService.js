'use strict';

describe('Factory: UserService', function () {

  // load the service's module
  beforeEach(module('WebPuzzleFrontApp'));

  // instantiate service
  var UserService;
  beforeEach(inject(function (_UserService_) {
      UserService = _UserService_;
  }));

  it('should do nothing', function () {
    expect(true).toBe(true);
  });

});
