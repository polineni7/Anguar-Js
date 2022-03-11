var app =angular
                .module("myModule",[])
                .controller("myController",function($scope)
                {
                    var employees = [
                        {name:"harini",salary:34000,gender:"Female" },
                        {name:"Prasad",salary:33000,gender:"Male" },
                        {name:"Janu",salary:24000,gender:"Female" },
                        {name:"Ammu",salary:24000,gender:"Female" },
                        {name:"Siva",salary:44000,gender:"Male" },
                        {name:"Ram",salary:54000,gender:"Male" },
                    ];
                    $scope.employees=employees;
                    $scope.empView="EmployeesTable.html";
                });