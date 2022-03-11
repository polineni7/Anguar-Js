var app= angular
            .module("myModule",[])
            .controller("myController",funcation($scope){
                var employess =
                [
                    { firstname:"ben",lastname:"Hesting",gender:"male",salary:1010},
                    { firstname:"ben",lastname:"cutting",gender:"male",salary:1100},
                    { firstname:"ben",lastname:"ten",gender:"male",salary:1200},
                    { firstname:"keven",lastname:"perter",gender:"male",salary:1100},
                    { firstname:"bob",lastname:"bob",gender:"male",salary:1000},
                    { firstname:"alise",lastname:"a",gender:"male",salary:1200},
                    { firstname:"rock",lastname:"The",gender:"male",salary:1400}
                ];
                $scope.employess = employess;
            });