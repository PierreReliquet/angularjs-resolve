(function() {
    var resolveApp = angular.module('resolveApp');

    resolveApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/noresolution', {
            templateUrl : 'noresolution.html',
            controller : 'NoResolution'
        });
    }]);

    resolveApp.controller('NoResolution', ['$scope', '$http', function($scope, $http) {
        var start = Date.now();
        $http.get('/resolve').success(function(data) {
            $scope.content = data;
            console.log("NoResolution controller data initialization time : " + (Date.now() - start) + 'ms');
        })
    }]);
})();

