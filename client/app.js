angular.module('app', [
  'ui.router',
  'StudentController',
  'studentFactory',
  'TeacherController',
  'teacherFactory',
  'AuthController', 
  'authFactory',
  'detailController'
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
  .state('teacher.detail', {
    url: '/:id',
    templateUrl: 'views/detail.html',
    controller: 'detailController'
  })
  
  $urlRouterProvider.otherwise('/');
});