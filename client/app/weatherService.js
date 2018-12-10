app.service('WeatherService', function($http){
  this.getWeather = function($scope, search){
    var url = 'http://api.openweathermap.org/data/2.5/forecast?'
    var config = {
      params: {
        zip: search,
        APPID: ''
      }
    }
    var promise = $http.get(url, config);
    return promise;
  };
});