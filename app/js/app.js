(function () {
    var app = angular.module('carApp', ['ngAnimate', 'myControllers', 'myServices', 'myFilters', 'myDirectives', 'ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/cars', {
                    templateUrl: 'partials/cars.html',
                    controller: 'VehicleListController',
                    title: 'Cars'
                }).
                when('/cars/:carId', {
                    templateUrl: 'partials/car-detail.html',
                    controller: 'VehicleDetailController',
                    title: 'About'
                }).
                otherwise({
                    redirectTo: '/cars'
                });
        }]);



    app.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
})();