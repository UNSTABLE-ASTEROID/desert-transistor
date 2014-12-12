//this is bad and should get refactored, probably

var getClassData = function(classID){
  //filter confusion collection to be only for specific class data
  var classConfusionCollection = confusionCollection.filter(function(confusionObject){
    return classID === confusionObject.classID;
  });
}