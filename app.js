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

  //CONTROLLERS
  weatherApp.controller('HomeCtrl', ['$scope', function ($scope) {

  }]);

  weatherApp.controller('ForecastCtrl', ['$scope', function ($scope) {

  }]);
