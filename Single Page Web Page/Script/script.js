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
            .when("/register", {
                templateUrl: "Templates/register.html",
                controller: "RegisterController"
            })
            .when("/tutors", {
                templateUrl: "Templates/tutors.html",
                controller: "tutorsController"
            })
            .when("/users", {
                templateUrl: "Templates/users.html",
                controller: "usersController"
            })
    });

app.controller("homeController", function ($scope) {
    $scope.message = "Home Page";
});
app.controller("coursesController", function ($scope) {
    $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
});
app.controller("tutorsController", function ($scope) {
    $scope.tutors = ["ram", "ravi", "kiran", "suresh"];
});

app.service("RegisterService" , function()
{
    var uid = 1;
    var users = [{
    'id' :'' ,
    'name' : 'John Doe',
    'email' : 'johndoe@gmail.com',
    'password': 'johndoe',
    'phone' : '123-45-678-901'}]; 
     
     // Save User
     this.save = function(user)  
     {
     if(user.id == null)                       
     {
     user.id = uid++;
     users.push(user);
     }
     else
     {
     for(var i in users)
     {
     if(users[i].id == user.id)
     {
     users[i] = user;
     }
     }
     }
     };
     
     // Search User
     this.get = function(id)
     {
     for(var i in users )
     {
     if( users[i].id == id)
     {
     return users[i];
     }
     }
     };
     
     // Delete User
     this.delete = function(id)
     {
     for(var i in users)
     {
     if(users[i].id == id)
     {
     users.splice(i,1);
     }
     }
     }; 
     
     // List Users
     this.list = function()
     {
     return users;
     }; 
    });
     
    // Register Controller 
    app.controller("RegisterController" , function($scope , RegisterService){
    console.clear();
    $scope.ifSearchUser = false;
    $scope.title ="User List";
    $scope.users = RegisterService.list();
    $scope.saveUser = function()
    {
     console.log($scope.newuser);
     if($scope.newuser == null || $scope.newuser == angular.undefined)
     return;
     RegisterService.save($scope.newuser);
     $scope.newuser = {};
    }; 
    $scope.delete = function(id)
    {
     RegisterService.delete(id);
     if($scope.newuser != angular.undefined && $scope.newuser.id == id)
     {
     $scope.newuser = {};
     }
    }; 
    $scope.edit = function(id)
    {
     $scope.newuser = angular.copy(RegisterService.get(id));
    }; 
    $scope.searchUser = function(){
     if($scope.title == "User List"){
     $scope.ifSearchUser=true;
     $scope.title = "Back";
     }
     else
     {
     $scope.ifSearchUser = false;
     $scope.title = "User List";
     }   
    };
    });
