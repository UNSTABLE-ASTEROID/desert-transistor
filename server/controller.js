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
	}
};

