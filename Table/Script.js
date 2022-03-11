var myApp = angular
                .module("MyModule",[])
                .controller("MyController",function($scope)
                {
                    var emp=
                    [
                        {firstname:"ram",lastname:"Siva",gender="male",add:"New Jersy",sal:1200,time:"12-12-12"},
                        {firstname:"kiran",lastname:"Siva",gender="male",add:"New Jersy",sal:1200,time:"12-12-12"},
                        {firstname:"juli",lastname:"k",gender="female",add:"New York",sal:1400,time:"11-12-12"}
                    ];
                    $scope.emp=emp;
                })