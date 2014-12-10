angular
	  .module('detailController', [])
    .controller('detailController',['$scope', '$stateParams', function($scope, $stateParams){
       console.log($stateParams)
        var links = {chem: 'http://alignment.hep.brandeis.edu/Devices/Inclinometer/HTML/Stability_16.gif',
          phys: 'http://alignment.hep.brandeis.edu/Devices/Inclinometer/HTML/Cycle_1.gif',
          bio: 'http://alignment.hep.brandeis.edu/Devices/Inclinometer/HTML/Cycle_2.gif'}
        $scope.lecture = $stateParams.id;
        $scope.imgUrl = links[$scope.lecture];
    }])