angular
	  .module('TeacherController', [])
	  .controller('TeacherController', ['$scope', 'teacherFactory', function($scope, teacherFactory){

      $scope.lectures = ['bio','phys','chem']
			$scope.confusedStudents = teacherFactory.confusedStudents;
			
	  }])
