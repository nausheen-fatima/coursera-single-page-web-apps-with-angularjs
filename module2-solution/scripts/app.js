(function() {
  'use strict';
  angular.module("ShoppingListApp", [])
  .controller("ToBuyShoppingController", ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var self = this;
    self.toBuy = ShoppingListCheckOffService.toBuy;
    self.bought = ShoppingListCheckOffService.bought;

    self.buyItem = function(index) {
      var item = self.toBuy[index];
      self.toBuy.splice(index, 1);
      self.bought.push(item);
    }
  }

  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var self = this;
    self.toBuy = ShoppingListCheckOffService.toBuy;
    self.bought = ShoppingListCheckOffService.bought;

    self.unBuyItem = function(index) {
      var item = self.bought[index];
      self.bought.splice(index, 1);
      self.toBuy.push(item);
    }
  }

  function ShoppingListCheckOffService() {
    var self = this;
    self.toBuy = [
      {quantity: 10, item: "Cookies"},
      {quantity: 4, item: "Piglets"},
      {quantity: 2, item: "Buckets"},
      {quantity: 9, item: "Fruits"},
      {quantity: 20, item: "Vegetables"}
    ];
    self.bought = [];
  }
}());
