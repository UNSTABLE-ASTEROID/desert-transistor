angular
	  .module('studentFactory', [
	  	'SocketConnection'
	  ])

	  .factory('studentFactory', ['Socket', function(socket) {
	  	var student = {};

			//when someone clicks confused, this function will be called in the controller
	  	student.connect = function() {};

	  	student.confusedStudent = function(name, lectureID) {
	  		console.log(arguments, 'confused')
	  		socket.connection.emit('confusion', {
	  			lectureID: lectureID,
	  			studentID: name
	  		});
	  	};

	  	return student;	  	
	  }]);