angular
	  .module('ClassController', [])
	  .controller('ClassController', ['$scope','$stateParams', 'studentFactory', 'Socket', function($scope,$stateParams, studentFactory, socket){
	  	socket.connect();

		  studentFactory.connect();
	    
	    $scope.confusedStudent = function() {
				studentFactory.confusedStudent ('some name!', $stateParams.class);   	
	    }
	  }])

