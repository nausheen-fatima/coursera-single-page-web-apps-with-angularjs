(function () {
'use strict';

angular.module('NarrowItDownApp')
.component('foundItems', {
  templateUrl: 'src/narrow/founditems.template.html',
  controller: FoundItemsComponentController,
  bindings: {
    found: '<foundItems',
    isEmpty: '<',
    onRemove: '&'
  }
});


FoundItemsComponentController.$inject = ['$rootScope', '$element', '$q']
function FoundItemsComponentController($rootScope, $element, $q) {
  var vm = this;

  vm.order = "short_name";
  vm.reverse = false;

  vm.sortBy = function(order) {
    vm.reverse = (vm.order === order) ? !vm.reverse : false;
    vm.order = order;
  };

  vm.$doCheck = function () {
    var warningElem = $element.find('div.alert');
    if (vm.isEmpty) {
      warningElem.css('display', 'block');
    } else {
      warningElem.css('display', 'none');
    }
  };

  vm.remove = function (id) {
    vm.onRemove({ itemId: id });
  };
}

})();
