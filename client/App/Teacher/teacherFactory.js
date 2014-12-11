angular
  .module('teacherFactory', [
  	'SocketConnection'	
  ])

  .factory('teacherFactory', ['Socket', function(socket){
		var confusedStudents = [];

		//listens for any updates and will call a function in the teacher.js
		socket.on("teacher:update", function(data){
		    confusedStudents.push(data);
		    updateConfusionCollection(confusedStudents);
		    console.log(data.studentID);
		})

		return {
			confusedStudents: confusedStudents
		};

	}]);
