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
    when('/forecast/:days', {
     templateUrl: 'pages/forecast.html',
     controller: 'ForecastCtrl'
    }).
    otherwise({
     redirectTo: '/'
    });
});
