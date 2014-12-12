angular
	  .module('TeacherController', [])
	  .controller('TeacherController', ['$scope', 'teacherFactory','$http', function($scope, teacherFactory, $http){

      // $scope.lectures = ['bio','phys','chem']
			$scope.confusedStudents = teacherFactory.confusedStudents;
      $http.get('/api/teachers')
      .success(function(data, status, headers, config) {
        console.log('http',data)
        $scope.lectures = data;
      })
			
	  }])
