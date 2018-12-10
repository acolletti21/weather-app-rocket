angular.module('app', [])
.controller('WeatherCtrl', function($scope, $http) {
    $scope.$watch('search', function(value) {
      fetch(value);
    });

    $scope.search = "60606";

    function fetch(search) {
      var promise = WeatherService.getWeather(search);
      promise.then(function(response) {
          $scope.weatherResult = response.data.search;
        });
      };
  });
