(function () {
  "use strict";

  angular.module('MenuApp')
    .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ["MenuDataService", "categories"];
  function MenuCategoriesController(MenuDataService, categories) {
    var categoriesCtrl = this;

    categoriesCtrl.categories = categories;
  }

})();
