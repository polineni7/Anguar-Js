var myApp = angular
                .module("myModule",[])
                .controller("mycontroller",function($scope){
                    var emps = [
                        {firstname:"bob",lastname:"bob",Address:"7th street san antonio texas ",ZIPcode:78001,Salary:120000,gender:"male"},
                        {firstname:"alise",lastname:"bu",Address:"7th street san antonio texas ",ZIPcode:78001,Salary:120000,gender:"male"},
                        {firstname:"peter",lastname:"ga",Address:"7th street san antonio texas ",ZIPcode:78001,Salary:120000,gender:"male"},
                        {firstname:"keven",lastname:"mark",Address:"7th street san antonio texas ",ZIPcode:78001,Salary:120000,gender:"male"},
                        {firstname:"jusi",lastname:"nan",Address:"7th street san antonio texas ",ZIPcode:78001,Salary:120000,gender:"female"},
                        {firstname:"maxi",lastname:"los",Address:"7th street san antonio texas ",ZIPcode:78001,Salary:120000,gender:"male"},
                    ]
                    $scope.emps=emps;
                });

// function on() {
//     document.getElementById("overlay").style.display = "block";
//   }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }