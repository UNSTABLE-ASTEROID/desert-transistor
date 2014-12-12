angular
  .module('StudentController', [])
  .controller('StudentController', ['$scope', '$stateParams' ,'studentFactory', function($scope, $stateParams, studentFactory){
		studentFactory.connect();

	  $scope.confusedStudent = function() {
			studentFactory.confusedStudent ($scope.student.studentName);   	
	  };

	}])

