(function() {
    var resolveApp = angular.module('resolveApp');

    resolveApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/resolve', {
            templateUrl: 'resolved.html',
            controller: 'Resolve',
            resolve: {
                Content: ['$http', '$q', function ($http, $q) {
                    var deferred = $q.defer();
                    $http.get('/resolve').success(function (data, status, headers) {
                        deferred.resolve(data);
                    });
                    return deferred.promise;
                }]
            }
        });
    }]);

    resolveApp.controller('Resolve', ['$scope', 'Content', function($scope, Content) {
        var start =  Date.now();
        $scope.content = Content;
        console.log("Resolve controller data initialization time : " + (Date.now() - start) + 'ms');

    }]);
})();

