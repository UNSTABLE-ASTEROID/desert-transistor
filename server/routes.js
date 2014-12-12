var confusionController = require('./controller.js');

module.exports = function(router){
  // router.get('/', confusionController.getVotes);
  // router.get('/lectures', confusionController.getLectureData)
  // router.get('/teachers', confusionController.getTeacherData);

  router.post('/', confusionController.addVote);
};