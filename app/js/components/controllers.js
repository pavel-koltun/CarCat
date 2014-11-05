(function() {
    var controllers = angular.module('myControllers', [])

    controllers.controller('VehicleListController', ['$scope', '$http', 'CarService', function($scope, $http, CarService) {
        $scope.cars = CarService.query();
        $scope.orderProp = "name";
    }]);

    controllers.controller('VehicleDetailController', ['$scope', '$http', '$routeParams', 'CarService', function($scope, $http, $routeParams, CarService) {
        $scope.car = CarService.get({"carId": $routeParams.carId}, function(car) {
            $scope.mainCarImage = car.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainCarImage = imageUrl;
        };
    }]);

    controllers.controller('VehicleReviewController', function() {
        this.review = {};

        this.addReview = function(car) {
            this.review.date = new Date();
            car.reviews.push(this.review);
            this.review = {};
            return true; //This is used for form clean-up after adding review
        };
    });
})();
