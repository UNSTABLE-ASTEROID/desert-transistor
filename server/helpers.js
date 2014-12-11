var confusionModel = require('./model.js');


//used to add data to mongo. Used in both http requests with sockets 
exports.addVote = function (data, callback) {
	callback = callback || function () {};

	//this will temporarily populate the teacherID of the data
	data.teacherID = data.teacherID || 'some teacher';

	confusionModel.create(data, function (err, data) {
		if (err) throw err;
		callback(data);
	})	
};

//used to add data from mongo. Used in both http requests with sockets 
exports.getVotes = function(callback){
	callback = callback || function () {};
	confusionModel.find(function(err, data){
		if(err) throw err;
		callback(data);
	})
};

exports.getLectureData = function(lectureID, callback) {
	//if a lectureID is specified, return all the data for that lecture.  Otherwise, return data for all lectures
	if (lectureID) {
		confusionModel.find({lectureID: lectureID}, function(err, data) {
			if (err) throw err;
			callback(data);
		});
	} else {
		confusionModel.find(function(err, data) {
			if (err) throw err;
			callback(data);
		});
	}
};

exports.getTeacherData = function(teacherID, callback) {
	//if a teacherID is specified, return all the classes for that teacher.  Otherwise, return all the classes.  
	if (teacherID) {
		confusionModel.find({teacherID: teacherID}, function(err, data) {
			if (err) throw err;
			callback(data);
		});
	} else {
		confusionModel.find(function(err, data) {
			if (err) throw err;
			callback(data);
		});
	}
};