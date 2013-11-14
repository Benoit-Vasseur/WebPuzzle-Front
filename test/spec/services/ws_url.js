'use strict';

describe('Service: WsUrl', function () {

  // load the service's module
  beforeEach(module('WebPuzzleFrontApp'));

  // instantiate service
  var config;
  beforeEach(inject(function (_WsUrl_) {
    config = _WsUrl_;
  }));

  it('should do something', function () {
    console.log(config);
    expect(config).toMatch(/http/);
  });

});
