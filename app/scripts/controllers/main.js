'use strict';

/**
 * @ngdoc function
 * @name dojoSucksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dojoSucksApp
 */
angular.module('dojoSucksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
