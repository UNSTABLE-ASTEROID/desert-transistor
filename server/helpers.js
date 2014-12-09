var confusionModel = require('./model.js');


//used to add data to mongo. Used in both http requests with sockets 
exports.addVote = function (data, callback) {
	callback = callback || function () {};
	confusionModel.create(data, function (err, data) {
		if (err) throw err;
		callback(data);
	})	
}

//used to add data from mongo. Used in both http requests with sockets 
exports.getVotes = function(callback){
	callback = callback || function () {};
	confusionModel.find(function(err, data){
		if(err) throw err;
		callback(data);
	})
}


				