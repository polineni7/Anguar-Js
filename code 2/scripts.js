

var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/',{templateUrl: 'PartialHome.html'})
        .when('/login',{templateUrl: 'PartialLogin.html'})
        .when('/register',{templateUrl: 'PartialRegister.html'})

});

var app = angular
    .module("Demo", ["ngRoute"]);
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/home", {
                templateUrl: "Templates\home.html",
                controller: "homeController"
            })
            .when("/Courses", {
                templateUrl: "Templates\Courses.html",
                controller: "coursesController"
            })
            .when("/Students", {
                templateUrl: "Templates\Students.html",
                controller: "studentsController"
            })

    });
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
    })
    .controller("studentsController", function ($scope) {
        $scope.students = ["ram", "ravi", "kiran", "suresh"];
            })
    })









