//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

  //ROUTES
  weatherApp.config(function ($routeProvider) {
    $routeProvider.
      when('/', {
       templateUrl: 'pages/home.html',
       controller: 'HomeCtrl'
      }).
      when('/forecast', {
       templateUrl: 'pages/forecast.html',
       controller: 'ForecastCtrl'
      }).
      otherwise({
       redirectTo: '/'
      });
  });

  //SERVICES
  weatherApp.service('citySevice', function(){
      this.city = "Beograd";
  });

  //CONTROLLERS
  weatherApp.controller('HomeCtrl', ['$scope','citySevice', function ($scope, cityService) {
      $scope.city = cityService.city;
      $scope.$watch('city', function(){
        cityService.city = $scope.city;
      })
  }]);

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

      //converting Date to human readable date
			$scope.convertToDate = function(dt){
				return new Date(dt * 1000);
			};
  }]);
