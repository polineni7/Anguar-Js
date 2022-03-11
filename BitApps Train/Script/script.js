var app = angular.module("Demo", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/", {
                templateUrl: "index.html",
                controller: "indexController"
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
            .when("/login", {
                templateUrl: "login.html",
                controller: "loginController"
            })
            .when("/details", {
                templateUrl: "Templates/details.html",
                controller: "detailsController"
            })
    });
var myapp = angular.module("Demo1",["ngRoute"]);
myapp.config(function($routeProvider){
    $routeProvider
        .when("/register",{
            templateUrl:"Templates/register.html",
            controller:"RegisterController"
        })
});

var Api1 =angular.module("MyApi",[]);
Api1.controller("MyApiController",function($scope,$http,$log){
    $http({
        method:'Get',
        url:'https://testrsc.azurewebsites.net/Web/AdminFilesScripts/ClientUser/ClientUser.js'})
        .then(function(response){
            $scope.Apidata=response.Apidata;
            $log.info(response);
        },function(reason){
            $scope.error=reason.error;
            $log.info(reason);
        }
        );
    });

    var Api2 =angular.module("MyApi2",[]);
    Api2.controller("MyApiController2",function($scope,$http,$log){
        $http({
            method:'Get',
            url:'https://jsonplaceholder.typicode.com/todos/1'})
            .then(function(response){
                $scope.Apidata2=response.Apidata2;
                $log.info(response);
            },function(reason){
                $scope.error=reason.error;
                $log.info(reason);
            }
            );
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



    var API3 =angular.module("MyApi3",[]);
    API3.controller("MyApiController3",function($scope,Service){
        GetData();
        function GetData(){
            var data = {
                SearchString:'',
                PageNo:1,
                Records:$scope.pageSize,
                ShortField:'',
                SortAsc:true
            };

            var displaydata=Service.loadcountrydata(data);
            displaydata.then(function(res){
            console.log(res.data);
            $scope.CountryData=res.data.Data;
            });
        }
    };


    API3.service("Service", ['$http', function ($http) {
        this.loadcountrydata = function (postdata) {
            var url = "https://testrsc.azurewebsites.net/api/Country/CountrySearch";
            return $http.post(url, postdata).then(function (res) {
                return res;
            });
        };
    
        this.createcountryData = function (postdata) {
            var url = "https://testrsc.azurewebsites.net/api/Country/PostCountry";
            return $http.post(url, postdata).then(function (res) {
                return res;
            });
        };
    
        this.deletecountryData = function (CtryID) {
            var url = 'https://testrsc.azurewebsites.net/api/Country/DeleteCountry/' + CtryID;
            return $http.delete(url);
        };
    
        this.getcountryeditdata = function (countryId) {
            var url = 'https://testrsc.azurewebsites.net/api/Country/GetCountry/' + countryId;
            return $http.get(url);
        };
    
        this.editcountryData = function (CtryID, obj) {
            var url = "https://testrsc.azurewebsites.net/api/Country/PutCountry/" + CtryID;
            return $http.put(url, obj).then(function (res) {
                return res;
            });
        };
    }]);

