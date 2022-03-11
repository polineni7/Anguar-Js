var app = angular.module("Demo", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController"
            })
    });

app.controller("homeController", function ($scope) {
    $scope.message = "Home Page";
});
app.controller("coursesController", function ($scope) {
    $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
});
app.controller("studentsController", function ($scope) {
    $scope.students = ["ram", "ravi", "kiran", "suresh"];
});
