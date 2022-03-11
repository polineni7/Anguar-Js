var app = angular.module("Demo", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "index.html",
                controller: "homeController"
            })
            .when("/login", {
                templateUrl: "Templates/login.html",
                controller: "loginsController"
            })
            .when("/register", {
                templateUrl: "Templates/register.html",
                controller: "registerController"
            })
            .when("/details",{
                templateUrl:"Templates/details.html",
                controller:"detailsController"
            })
    });
