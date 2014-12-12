angular.module('confusionGraphController',[]).controller('confusionGraphController', ['$scope','$window','dataFactory',

  function ($scope, $window, dataFactory) {

    //$scope.confusionCollection = [];

    console.log('testing control');
    console.log($scope.confusionCollection);

    $window.addEventListener('resize', function () {
      $scope.$broadcast('windowResize');
    });

    $scope.confusionCollection = dataFactory.confusedStudents();
  }
]);