var myApp = angular 
                .module("myModule",[])
                .controller("myController",function($scope)
                {
                    var emps =
                    [
                        {
                            name:"Ram",
                            address:
                            [
                                {
                                    name:"Guntur",
                                    name:"Andhra Pradesh",
                                    name:"India",
                                }
                            ]
                        },
                        {
                            name:"Krishna",
                            address:
                            [
                                {
                                    name:"Narasaraopet",
                                    name:"Andhra Pradesh",
                                    name:"India",
                                }
                            ]
                        },
                        {
                            name:"VP",
                            address:
                            [
                                {
                                    name:"Krishna",
                                    name:"Andhra Pradesh",
                                    name:"India",
                                }
                            ]
                        }
                    ];
                    $scope.emps=emps;
                    
                });