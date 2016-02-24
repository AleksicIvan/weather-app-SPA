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

  weatherApp.controller('ForecastCtrl', ['$scope', 'citySevice', function ($scope, cityService) {
      $scope.city = cityService.city;
  }]);
