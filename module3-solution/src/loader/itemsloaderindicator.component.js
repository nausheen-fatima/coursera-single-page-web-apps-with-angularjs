(function () {
'use strict';

angular.module('ItemsLoaderIndicatorApp')
.component('itemsLoaderIndicator', {
  templateUrl: 'src/loader/itemsloaderindicator.template.html',
  controller: ItemsLoaderIndicatorController
});


ItemsLoaderIndicatorController.$inject = ['$rootScope', '$element']
function ItemsLoaderIndicatorController($rootScope, $element) {
  var vm = this;

  var cancelListener = $rootScope.$on('founditems:processing', function (event, data) {
    console.log("Data: ", data.on);

    vm.showLoader = data.on;
  });

  vm.$doCheck = function () {
    var loaderElem = $element.find('div.loader');
    if (vm.showLoader) {
      loaderElem.css('display', 'block');
    } else {
      loaderElem.css('display', 'none');
    }
  };

  vm.$onDestroy = function () {
    cancelListener();
  };

};

})();
