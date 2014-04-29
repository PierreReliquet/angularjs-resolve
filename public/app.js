(function() {
    angular.module('resolveApp', ['ngRoute']).run(['$rootScope', function($rootScope) {
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
})();