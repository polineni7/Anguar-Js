var myApp = angular
                    .module("myModule",[])
                    // .controller("myController",function($scope)
                    // {
                    //     var emp=[
                    //         { firstname:"Ramu", lastname:"Polineni", gender:"male", salary:1100 },
                    //         { firstname: "Ben", lastname:"Cutting", gender:"male", salary:1200},
                    //         {firstname:"Keven",lastname:"Petter",gender:"male",salary:1400},
                    //         {firstname:"lusi",lastname:"pep",gender:"female",salary:1111},
                    //         {firstname:"Keath",lastname:"Ast",gender:"female",salary:1200,Adds:"12th line Eastlondon",Time:"12:12",day:"12-12-2020"}   
                    //     ];

                    //     $scope.emp=emp;
                    // });
                   myApp.controller("myController",function($scope,$http)
                   {
                       
                        // $scope.lastname=null;
                        // $scope.gender=null;
                        // $scope.adds=null;
                        // $scope.salary=null;
                        // $scope.ttime=null;
                        // $scope.day=null;

                        $scope.sub=function(firstname,lastname,gender,salary,adds,ttime,day)
                        {
                          var data=
                            {
                                firstname:firstname,
                                lastname:lastname,
                                gender:gender,
                                salary:salary,
                                time:ttime,
                                day:day

                            };
                            $http.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data))
                            .then(function(response)
                            {
                                console.log(response);
                                $scope.fname=$scope.firstname;
                                $scope.lname=$scope.lastname;
                                $scope.ger=$scope.gender;
                                $scope.add=$scope.adds;
                               $scope.salar=$scope.salary;
                               $scope.ttim=$scope.ttime;
                                 $scope.da=$scope.day;
                            })


                        }              
                    })