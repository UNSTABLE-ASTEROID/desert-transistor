angular
  .module('teacherFactory', [])
  .factory('teacherFactory',[ function(){

		var socket = io();

		var confusedStudents = [];

		//listens for any updates and will call a function in the teacher.js
		//will also console.log the name from the student object that was submitted
		socket.on("teacher:update", function(data){
		    confusedStudents.push(data);
		    calculateConfusion(confusedStudents);
		    console.log(data.studentID);
		})

		return {
			confusedStudents: confusedStudents
		};

	}]);
