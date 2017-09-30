var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    $scope.details = [];
    $scope.msg = '';

    // first function to add the input data
    
    $scope.add = function () {
        if (!$scope.name || !$scope.phone || !$scope.email) {
            $scope.msg = "Can not be displayed";
        } else {
            var contact = {
                name : $scope.name,
                phone : $scope.phone,
                email : $scope.email
            };
            $scope.details.push(contact);
          }
        };
    // second function to edit input data $scope.edit = function () {}
    //third function to delete unuseful data
    $scope.removeItem = function (x){
        $scope.details.splice(x, 1);
    };
});