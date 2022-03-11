var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope)
{
    var emp=
    {
        firstname:"Ram",
        lastname:"Polineni",
        gender:"male"
    };
    $scope.emp=emp;
});
