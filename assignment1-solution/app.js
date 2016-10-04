(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.name = "";
  $scope.something = "hungry";
  $scope.message ="";
  $scope.check = function(){
        var str = $scope.name;
        var arrayOfStrings = str.split(',');
       var len = arrayOfStrings.length ;
       console.log(len);
       if( $scope.name === '') {
          $scope.message= "Please enter data first";
                 }
        else if( len <= 3) {
                        $scope.message="Enjoy!";
                   }
         else {
                    $scope.message="Too much!";
                }

     };


}//end of controller function




})();
