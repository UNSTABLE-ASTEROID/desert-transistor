angular
	  .module('ClassController', [])
	  .controller('ClassController', ['$scope','$stateParams', 'studentFactory', 'authFactory', function($scope,$stateParams, studentFactory, authFactory){
	  	console.log($stateParams,'params in class')

		  studentFactory.connect();

	    //references the existing object in the authFactory so that it can grab the value entered
	    //by the student in the login page
	    $scope.student = authFactory;
	    
	    $scope.confusedStudent = function() {
			studentFactory.confusedStudent ($scope.student.studentName, $stateParams.class);   	
	    }
	  
	  }])

