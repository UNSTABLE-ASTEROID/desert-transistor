angular
  .module('AuthController', [])
  .controller('AuthController', ['$scope', 'authFactory', '$stateParams',function($scope, authFactory,$stateParams) {
  	//refers to the object in authFactory for both the studentName and createName
    console.log('state params for AuthController', $stateParams)
  	$scope.student = authFactory;
    $scope.submit = function (){
      $scope.student.createName($scope.text,$stateParams)
    }
  }]);