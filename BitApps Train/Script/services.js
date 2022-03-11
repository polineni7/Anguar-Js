app.service("Service", ['$http', function ($http) {
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