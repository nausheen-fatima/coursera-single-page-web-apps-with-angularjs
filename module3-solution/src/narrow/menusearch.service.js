(function () {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService);

MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuSearchService($q, $http, ApiBasePath) {
  var vm = this;
  var result = {
    foundItems: []
  };

  vm.getMatchedMenuItems = function(searchTerm) {
    var deferred = $q.defer();
    vm.result = {
      foundItems: []
    };
    var searchTerm = (typeof searchTerm !== 'undefined') ? searchTerm.trim().toLowerCase() : "";

    if (searchTerm.length === 0) {
      console.log("Empty search term!");
      deferred.reject(vm.result);
      return deferred.promise;
    }
    console.log("Search Term: " + searchTerm);

    $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      response.data.menu_items.forEach(function(item) {
        if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
          vm.result.foundItems.push(item);
        }
      });
      if (vm.result.foundItems.length === 0) {
        console.log("Search term not found!");
        deferred.reject(result);
      } else {
        deferred.resolve(vm.result);
      }
    }).catch(function (error) {
      console.log(error);
      deferred.reject(vm.result);
    });

    return deferred.promise;
  };

  vm.removeItem = function (itemId) {
    for (var i = vm.result.foundItems.length; i--;) {
      if (vm.result.foundItems[i].id === itemId) {
        vm.result.foundItems.splice(i, 1);
      }
    };
    // vm.result.foundItems.splice(vm.result.foundItems["id"][itemIndex], 1);
  }
}

})();
