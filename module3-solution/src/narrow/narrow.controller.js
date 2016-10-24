(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);

NarrowItDownController.$inject = ['$rootScope', 'MenuSearchService']
function NarrowItDownController($rootScope, MenuSearchService) {
  var vm = this;
  vm.searchTerm = "";
  vm.found = [];

  vm.isEmpty = false;

  vm.searchByKey = function(keyEvent) {
    if (keyEvent.which === 13) {
      vm.search();
    };
  };

  vm.search = function() {
    $rootScope.$broadcast('founditems:processing', {on: true});

    console.log("Service requested.");
    var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);

    promise.then(function(result) {
      vm.isEmpty = false;
      vm.found = result.foundItems;
    }).catch(function (error) {
      vm.isEmpty = true;
      vm.found = [];
    }).finally(function() {
      $rootScope.$broadcast('founditems:processing', {on: false});
    });
  };

  vm.removeItem = function (itemId) {
    MenuSearchService.removeItem(itemId);
  };
}

})();
