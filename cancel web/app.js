(function () {
    var app = angular.module('plunker', []);

    app.controller('MainCtrl', function (
        $scope, $log, $http, $q
    ) {

        // Private properties.
        var httpRequestCanceller;

        // Public properties.
        $scope.processing = undefined;
        $scope.response = undefined;

        // Public methods.
        $scope.clearResponse = clearResponse;
        $scope.initiateRequest = initiateRequest;

        // Private methods.
        function activate() {
            $scope.$on('eventThatNeedsToCancelTheRequest',
                cancelRequestOnBroadcastEvent);
        }

        function cancelRequestOnBroadcastEvent() {
            if (httpRequestCanceller) {
                // Time out the in-process $http request, abandoning its callback listener.
                httpRequestCanceller.resolve();
            }
        }

        function clearResponse() {
            $scope.response = undefined;
        }

        function initiateRequest(isImmediatelyCancelRequest) {
            $scope.processing = true;

            // Reset response property for this request.
            $scope.response = undefined;

            // Hook for abondoning the $http request.
            httpRequestCanceller = $q.defer();

            // Send request to server.
            $http.get(
                'https://run.plnkr.co', {
                timeout: httpRequestCanceller.promise
            }
            ).then(onSuccess, onError)
                .finally(always);

            if (isImmediatelyCancelRequest) {
                httpRequestCanceller.resolve();
            }

            function onSuccess(response) {
                $log.info('data: ' + JSON.stringify(response.data) + '.\nstatus: ' + response.status + '. \nconfig: ' + JSON.stringify(response.config));
                $scope.response = response;
            }

            function onError(response) {
                $log.error('data: ' + response.data + '.\nstatus: ' + response.status);
                $scope.response = response;
            }

            function always() {
                $scope.processing = false;
                httpRequestCanceller = undefined;
            }
        }
    });
})();