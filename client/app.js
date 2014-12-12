angular.module('app', [
  'ui.router',
  'studentFactory',
  'TeacherController',
  'TeacherAuth',
  'teacherFactory',
  'detailController',
  'ClassController',
  'confusionGraphController',
  'dataFactory',
  'confusionGraph',
  'historyGraph'
])

.config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('teacherAuth', {
    url: '/auth',
    templateUrl: 'App/Teacher/teacherLogin.html',
    controller: 'TeacherAuthController'
  })

  .state('class',{
    url: '/class/:class',
    templateUrl: 'App/Student/student.html',
    controller: 'ClassController',
  })
  
  .state('teacher', {
    url: '/teacher/:teacherID',
    templateUrl: 'App/Teacher/teacher.html',
    controller: 'TeacherController'
  })

  .state('teacher.detail', {
    url: '/:id',
    templateUrl: 'views/detail.html',
    controller: 'detailController'
  })
  
  $urlRouterProvider.otherwise('/auth');
});
