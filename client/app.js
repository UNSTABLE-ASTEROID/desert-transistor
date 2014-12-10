angular.module('app', [
  'ui.router',
  'StudentController',
  'studentFactory',
  'TeacherController',
  'teacherFactory',
  'AuthController', 
  'authFactory'
])

.config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('auth', {
    url: '/',
    templateUrl: 'App/Auth/login.html',
    controller: 'AuthController'
  })

  .state('student', {
    url: '/student',
    templateUrl: 'App/Student/student.html',
    controller: 'StudentController'
  })
  
  .state('teacher', {
    url: '/teacher',
    templateUrl: 'App/Teacher/teacher.html',
    controller: 'TeacherController'
  })

  .state('login',{
    url: '/signup',
    templateUrl: 'App/Auth/signup.html',
  })
  
  $urlRouterProvider.otherwise('/');
});