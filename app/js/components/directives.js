(function() {
    var directives  = angular.module('myDirectives', []);

    directives.directive('carTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/car-tabs.html',
            controller: function() {
                this.tab = 1;

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };

                this.isSet = function(tab) {
                    return this.tab === tab;
                }
            },
            controllerAs: 'tab'
        };
    });

    directives.directive('carGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/car-gallery.html'
        };
    });

    directives.directive('carSpecs', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/car-specs.html'
        };
    });

    directives.directive('carReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/car-reviews.html'
        };
    });
})();
