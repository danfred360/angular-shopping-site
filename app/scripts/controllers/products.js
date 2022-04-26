'use strict';

angular.module('finalProjectApp')
  .controller('ProductsCtrl', function ($scope, $stateParams, product) {
    $scope.product = product;
  });
