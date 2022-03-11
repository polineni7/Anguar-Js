app.service("APIService", function ($http) {
    this.getSubs = function () {
        return $http.get("api/Subscriber")
    }
}); 

this.saveSubscriber = function (sub) {
    return $http(
        {
            method: 'post',
            data: sub,
            url: 'api/Subscriber'
        });
}  

this.updateSubscriber = function (sub) {
    return $http(
        {
            method: 'put',
            data: sub,
            url: 'api/Subscriber'
        });
} 
this.deleteSubscriber = function (subID) {
    var url = 'api/Subscriber/' + subID;
    return $http(
        {
            method: 'delete',
            data: subID,
            url: url
        });
}  