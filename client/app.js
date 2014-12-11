angular.module('app', [
  'ui.router',
  'StudentController',
  'studentFactory',
  'TeacherController',
  'teacherFactory',
  'AuthController', 
  'authFactory',
  'detailController',
  'ClassController',
  'confusionGraphController',
  'dataFactory',
  'confusionGraph'
])

.config(function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  .state('auth', {
    url: '/auth/:class',
    templateUrl: 'App/Auth/login.html',
    controller: 'AuthController'
  })
  .state('class',{
    url: '/class/:class',
    templateUrl: 'App/Student/student.html',
    controller: 'ClassController',
    isPrivate: true
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
  
  $urlRouterProvider.otherwise('/auth');
})
.run(function ($rootScope, $state, authFactory) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    //$$route.authenticate refers to the authentication requirement in above router
    // if (toState && toState.authenticate && !Auth.isAuth()) {
    //   //Need to preventDefault to keep from going to unauthorized page before .go is called
    //   event.preventDefault();
    //   $state.go('signin');
    // }
    // console.log(toState, toParams, 'to params')
    // console.log(fromState, fromParams, 'from params')

    if( toState && toState.isPrivate){
      toState.isPrivate = !toState.isPrivate;
      event.preventDefault();
      console.log('sending', toParams, 'to', fromState.name)
      $state.go('auth',toParams);
    }
  });
});