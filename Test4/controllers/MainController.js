app.controller('MainController',['$scope','$rootscope',function($scope,$rootscope){
    $scope.list=["one","two","three","foure"];

    $scope.addItem = function(){
        $scope.list.push($scope.addToDo);
        $scope.addToDo='';
    }
}])