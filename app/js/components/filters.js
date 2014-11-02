(function() {
    angular.module('myFilters', []).filter('checker', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    });
})();