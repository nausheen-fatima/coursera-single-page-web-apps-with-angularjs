(function () {
  angular.module("LunchCheck",[])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject=["$scope"];

  function LunchCheckController($scope) {
    $scope.items="";
    $scope.result="";
    $scope.textstyle="";
    $scope.borderstyle="";
    $scope.checkIfTooMuch = function() {
      if($scope.items === ""){
          $scope.textstyle={"color":"red"};
          $scope.borderstyle={"border":"1px solid red"};
          $scope.result="Please enter data first";
      } else{
          var itemsArray = $scope.items.split(',');
          var nonEmptyArray=[];

          for(var i=0; i<itemsArray.length; i++){
            if(itemsArray[i]){
              nonEmptyArray.push(itemsArray);
            }
          }
          if(nonEmptyArray.length <= 3){
            $scope.textstyle={"color":"green"};
            $scope.borderstyle={"border":"1px solid green"};
            $scope.result="Enjoy!";
          } else{
            $scope.textstyle={"color":"green"};
            $scope.borderstyle={"border":"1px solid green"};
            $scope.result="Too much!";
          }
      }
    };

  };
})();
