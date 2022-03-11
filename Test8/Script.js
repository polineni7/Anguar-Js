var app = angular
                .module("myModule",[])
                .controller("myController",function($scope)
                {
                    var countries = [
                    {
                        name:"UK",
                        cities:
                        [
                            {
                                name:"london"
                            },
                            {
                                name:"Britan"
                            },
                            {
                                name:"denmakr"
                            }
                        ]
                    },
                    {
                        name: "USA",
                        cities:
                        [
                            {
                                name:"New Yark"
                            },
                            {
                                name:"New Jersy"
                            },
                            {
                                name:"Astrian"
                            }
                        ]
                    },
                    {
                        namme:"India",
                        cities:
                        [
                            {
                                name:"HYD"
                            },
                            {
                                name:"Delhi"
                            },
                            {
                                name:"KKR"
                            }
                        ]
                    }
            ];
            $scope.countries=countries;
        });