angular
  .module('TeacherAuth', [])

  .factory('TeacherAuthFactory', ['$state', function($state) {
    var teacherAuth = {};

    teacherAuth.submitLogin = function(username, password) {
      //eventually query the server for login
      teacherAuth.teacherID = username;
      $state.go('teacher', {teacherID: username});
    };

    return teacherAuth;
  }])

  .controller('TeacherAuthController', ['$scope', 'TeacherAuthFactory', function($scope, teacherAuth) {
    $scope.submit = teacherAuth.submitLogin;
  }]);
  