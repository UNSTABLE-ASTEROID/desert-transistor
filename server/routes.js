var confusionController = require('./controller.js');

module.exports = function(router){
	router.post('/', confusionController.addVote );
	router.get('/', confusionController.getVotes);
};