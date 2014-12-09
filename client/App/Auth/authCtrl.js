angular
  .module('AuthController', [])
  .controller('AuthController', ['$scope', 'authFactory', function($scope, authFactory) {
  	//refers to the object in authFactory for both the studentName and createName
  	$scope.student = authFactory;
  }]);