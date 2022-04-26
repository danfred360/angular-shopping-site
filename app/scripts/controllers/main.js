'use strict';

/**
 * @ngdoc function
 * @name finalProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectApp
 */

 angular.module('finalProjectApp')
   .controller('MainCtrl', function ($scope, products) {
     $scope.products = products;
   });
