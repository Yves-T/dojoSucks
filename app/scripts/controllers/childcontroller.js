'use strict';

/**
 * @ngdoc function
 * @name dojoSucksApp.controller:ChildcontrollerCtrl
 * @description
 * # ChildcontrollerCtrl
 * Controller of the dojoSucksApp
 */
angular.module('dojoSucksApp')
  .controller('ChildcontrollerCtrl', function ($scope) {

  	// $scope.items = ["1","2","3"];


 	$scope.logThisAndScope = function() {
 		console.log(this);
        console.log($scope);
        console.log("Ik ben child");
 	};


  });
