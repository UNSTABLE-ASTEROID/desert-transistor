
angular.module('dataFactory',['SocketConnection']).factory('dataFactory', ['Socket', function (socket) {

    var allConfusedStudents = [];
    var confusedStudents = [];

    var filter = function(){return true;};

    var getConfusedStudentsData = function(filterFunction){
      var filterResults = confusedStudents.filter(filterFunction);
      return filterResults;
    } 

    var setFilter = function(filFunction){
      filter = filFunction;
    };

    socket.connect();
    //listens for any updates and will call a function in the teacher.js
    socket.connection.on("teacher:update", function(data){
        allConfusedStudents.push(data);
        confusedStudents = allConfusedStudents.filter(filter);

    });

    return {
      confusedStudents: function(){return confusedStudents;},
      setFilter : setFilter
    };
}]);
