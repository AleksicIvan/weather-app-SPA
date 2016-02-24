weatherApp.controller('HomeCtrl', ['$scope','citySevice', function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
      cityService.city = $scope.city;
    })
}]);
