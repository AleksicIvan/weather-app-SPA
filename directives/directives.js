weatherApp.directive('weatherReport', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/WeatherReport.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  }
});
