(function () {
  "use strict";

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBaseUrl', 'ApiCategoriesPath', 'ApiItemsPath'];
  function MenuDataService($http, ApiBaseUrl, ApiCategoriesPath, ApiItemsPath) {
    var service = this;

    var compareNames = function (a, b) {
      var aName = a.name.toLowerCase();
      var bName = b.name.toLowerCase();

      if (aName < bName) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }
      return 0;
    };

    service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: ApiBaseUrl + ApiCategoriesPath
      })
      .then(function (response) {
        console.log("Categories HTTP response", response);
        return response.data.sort(compareNames);
      })
      .catch(function (error) {
        console.log("Something went wrong", error);
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: ApiBaseUrl + ApiItemsPath,
        params: {category: categoryShortName}
      })
      .then(function (response) {
        console.log("Items HTTP response", response);
        return response.data.menu_items.sort(compareNames);
      })
      .catch(function (error) {
        console.log("Something went wrong", error);
      });
    };
  }

})();
