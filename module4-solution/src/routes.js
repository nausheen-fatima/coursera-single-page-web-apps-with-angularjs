(function () {
  "use strict";

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "src/menu/templates/home.template.html"
    })

    .state("categories", {
      url: "/categories",
      templateUrl: "src/menu/templates/menu-categories.template.html",
      controller: 'MenuCategoriesController as categoriesCtrl',
      resolve: {
        categories: ["MenuDataService", function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state("categories.items", {
      url: "/items/{categoryShortName}",
      templateUrl: "src/menu/templates/menu-items.template.html",
      controller: 'MenuItemsController as itemsCtrl',
      resolve: {
        items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });

  }
})();
