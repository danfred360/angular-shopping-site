'use strict';

angular.module('finalProjectApp')
  .component('buyButton', {
    templateUrl: 'views/buybutton.html',
    bindings: {
      'product' : '<'
    }
  });
