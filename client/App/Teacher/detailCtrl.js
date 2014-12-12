angular
	  .module('detailController', [])
    .controller('detailController',['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
       console.log($stateParams)

       //$scope.data IS DATA
       

        $scope.lecture = $stateParams.id;

        $http.get('/api/lectures?'+'lectureID='+$scope.lecture)
        .success(function (data, status, headers, config){
          // console.log('lectures',data)
          $scope.data = data
        })



        var formatData = function (data) {
          var timeStamps = [];
          var buckets = 20; 
          var results = [$scope.lecture];
          var xAxis = [];
          data.forEach(function (el){
            timeStamps.push(new Date(el.createdAt).getTime())
          })
          console.log('timestamps',timeStamps)
          debugger
          var totalWidth = timeStamps[timeStamps.length-1] - timeStamps[0];
          console.log(totalWidth)
          var delta = totalWidth/buckets; 
          xAxis.push(timeStamps[0])
          var threshHold = timeStamps[0]+ delta;
          var tally = 0;

          timeStamps.forEach( function(el){
            debugger
            console.log('el - thresh', threshHold > el)             
            if(el < threshHold){
              tally++;
            } else {
              while( el > threshHold && threshHold < timeStamps[timeStamps.length-1]){
                threshHold+=delta
                xAxis.push(threshHold)
              }
              results.push(tally);
              tally = 1;
              threshHold+=delta 
            }
          });
          console.log('results', results)
          console.log('xAxis',xAxis)
          return results
        };

        var createGraph = function (data) {
          var chart = c3.generate({
            bindto: '.chart',
              data: {
                  columns: [
                      data
                  ],
                  type: 'bar'
              },
              bar: {
                  width: {
                      ratio: 0.5 // this makes bar width 50% of length between ticks
                  }
              }
          });
        };

    }])