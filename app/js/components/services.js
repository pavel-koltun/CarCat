(function () {
    var service = angular.module('myServices', ['ngResource']);

    service.factory('CarService', ['$resource',
        function($resource){
            return $resource('cars/:carId.json', {}, {
                query: {
                    method:'GET',
                    params: {
                        carId:'cars'
                    },
                    isArray:true
                }
            });
        }]);
})();