angular
  .module('authFactory', [
    'SocketConnection'
  ])
  .factory('authFactory', ['Socket', '$state', function(socket, $state) {
    var studentName = '';

    //function will change the name value above to the name a person enters
    //when it is envoked in the login page
  	var createName = function(name) {  		
      this.studentName = name;

      //emit that a newConnection has been made
      //NOTE: this is not being used, it is intended to allow for a different
      //d3 visualization
      socket.emit('newConnection', function(){
        newStudent: 'new student joined'
      })

      //when the studentName is submitted, it will change the view to student
      $state.go('student'); 
  	};

  	//this is used both in the AuthFactory and the StudentController
    return {
  		studentName: studentName,
  		createName: createName
  	};
  }]);