    investinsteadApp = angular.module('investinsteadApp',[]);

    function investinsteadCtrl($scope) {
      $scope.price = 5;
      $scope.rate = 5;
      $scope.years = 5;
      $scope.$watch('price', function() {
          $scope.fv = Number(parseFloat($scope.price)*Math.pow(1+$scope.rate/100,$scope.years).toFixed(2));
      });
      $scope.$watch('rate', function() {
          $scope.fv = Number(parseFloat($scope.price)*Math.pow(1+$scope.rate/100,$scope.years).toFixed(2));
      });
      $scope.$watch('years', function() {
          $scope.fv = Number(parseFloat($scope.price)*Math.pow(1+$scope.rate/100,$scope.years).toFixed(2));
      });
      $scope.fv = Number(parseFloat($scope.price)*Math.pow(1+$scope.rate/100,$scope.years).toFixed(2));
    }