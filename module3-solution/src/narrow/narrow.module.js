(function () {
'use strict';

angular.module('NarrowItDownApp', ['ItemsLoaderIndicatorApp']);

angular.module('NarrowItDownApp')
.config(function () {
  console.log("NarrowItDownApp config fired.");
})
.run(function () {
  console.log("NarrowItDownApp run fired.");
})
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

})();
