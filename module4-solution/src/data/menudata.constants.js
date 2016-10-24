(function () {
  "use strict";

  angular.module('data')
    .constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com')
    .constant('ApiCategoriesPath', '/categories.json')
    .constant('ApiItemsPath', '/menu_items.json');

})();
