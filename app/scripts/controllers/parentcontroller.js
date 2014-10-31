'use strict';

/**
 * @ngdoc function
 * @name dojoSucksApp.controller:ParentcontrollerCtrl
 * @description
 * # ParentcontrollerCtrl
 * Controller of the dojoSucksApp
 */
 angular.module('dojoSucksApp')
 .controller('ParentcontrollerCtrl', function ($scope) {

 	this.items = ["a","b","c"];

 	$scope.logThisAndScope = function() {
 		console.log(this);
        console.log($scope);
        console.log("Ik ben parent");
 	};
});

