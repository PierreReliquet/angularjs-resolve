(function() {
    var resolveApp = angular.module('resolveApp', ['ngRoute']);

    resolveApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/resolve', {
            templateUrl : 'resolved.html',
            controller : 'Resolve',
            resolve : {
                Content : ['$http', '$q', function($http, $q) {
                    var deferred = $q.defer();
                    $http.get('/resolve').success(function(data, status, headers) {
                        deferred.resolve(data);
                    });
                    return deferred.promise;
                }]
            }
        });
        $routeProvider.when('/noresolution', {
            templateUrl : 'noresolution.html',
            controller : 'NoResolution'
        });
    }]);

    resolveApp.run(['$rootScope', function($rootScope) {
        var start;
        $rootScope.$on('$routeChangeStart', function() {
            start = Date.now();
            console.log('routeChangeStart');
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            console.log('routeChangeSuccess');
            console.log('routeChangeDuration : ' + (Date.now() - start) + 'ms');
        })
    }]);

    resolveApp.controller('Resolve', ['$scope', 'Content', function($scope, Content) {
        var start =  Date.now();
        $scope.content = Content;
        console.log("Resolve controller data initialization time : " + (Date.now() - start) + 'ms');

    }]);

    resolveApp.controller('NoResolution', ['$scope', '$http', function($scope, $http) {
        var start = Date.now();
        $http.get('/resolve').success(function(data) {
            $scope.content = data;
            console.log("NoResolution controller data initialization time : " + (Date.now() - start) + 'ms');
        })
    }]);

})();