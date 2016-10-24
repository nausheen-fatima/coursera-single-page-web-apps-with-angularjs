(function () {
  "use strict";

  angular.module('MenuApp')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ["MenuDataService", "categories", "items", "$stateParams"];
  function MenuItemsController(MenuDataService, categories, items, $stateParams) {
    var itemsCtrl = this;

    var findCategory = function(shortName) {
      for (var i = 0; i < categories.length; i++)
        if (categories[i].short_name == shortName) {
          return categories[i];
        }
      return null;
    };

    itemsCtrl.items = items;
    itemsCtrl.category = findCategory($stateParams.categoryShortName);
  }

})();
