weatherApp.controller('ForecastCtrl', ['$scope', '$resource', '$routeParams', 'citySevice', function ($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    //getting data from API
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, appid: '2c53dab059c6e4363bba32efe6a0cff9', cnt: $scope.days});

    //converting to Celsius
    $scope.weatherToCelsius = function(degK){
      return Math.round(degK - 273.15);
    };

    //converting Date
    $scope.convertToDate = function(dt){
      return new Date(dt * 1000);
    };
}]);
