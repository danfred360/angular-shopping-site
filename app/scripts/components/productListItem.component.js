'use strict';

angular.module('finalProjectApp')
  .component('productListItem', {
    templateUrl: 'views/productlistitem.html',
    bindings: {
      'product': '<'
    }
  });
