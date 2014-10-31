'use strict';

describe('Controller: ParentcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('dojoSucksApp'));

  var ParentcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParentcontrollerCtrl = $controller('ParentcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
