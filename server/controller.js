var helpers = require('./helpers.js');

module.exports = {
	addVote: function(req, res, next){
		helpers.addVote(req.body, function(data){
			console.log('success');
			res.send(data);
		})
	},

	getVotes: function(req, res, next){
		helpers.getVotes(function(data){
			console.log('success');
			res.send(data);
		})
	},

	getLectureData: function(req, res, next) {
		var lectureID = req.query.lectureID;

		helpers.getLectureData(lectureID, function(data) {
			res.send(data);
		});
	},

	getTeacherData: function(req, res, next) {
		var teacherID = req.query.teacherID;

		helpers.getTeacherData(teacherID, function(data) {
			//convert the data to an array of unique lectureIDs
			var lectures = {};
			
			for (var i = 0; i < data.length; ++i) {
				lectures[data[i].lectureID] = true;
			}

			res.send(Object.keys(lectures) );
		});
	}
};

