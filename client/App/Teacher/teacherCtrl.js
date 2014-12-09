
angular
	  .module('TeacherController', [])
	  .controller('TeacherController', ['$scope', 'teacherFactory', function($scope, teacherFactory){

			$scope.confusedStudents = teacherFactory.confusedStudents;
			
	  }])
