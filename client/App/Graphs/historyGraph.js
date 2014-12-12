angular.module('historyGraph',[]).directive('historyGraph', ['dataFactory', 

  function (dataFactory) {

    var link = function ($scope, $el, $attrs) {
     
      var now = (new Date(Date.now())).getTime();

      function countData(data){
        if(data){
          var secondsBetween = (((new Date(data[data.length-1].createdAt))) - ((new Date(data[0].createdAt))))/1000; 
          var numberOfButtonPresses = data.length;
          return Math.round(numberOfButtonPresses/secondsBetween,2);
        }else
          return 0; 
      };

      var chart = c3.generate({
        bindto: '.c3Graph',
        data: {
            columns: [
                ['Button Presses Per Second ', 'LOADING']
            ],
            type: 'gauge',
        },
        gauge: {
           label: {
               format: function(value, ratio) {
                   return value;
               },
               show: false // to turn off the min/max labels.
           },
       min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
       max: 10, // 100 is default
       width: 50 // for adjusting arc thickness
        },
        color: {
            // pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
            pattern: ['#60B044','#F6C600','#F97600', '#FF0000'], // the three color levels for the percentage values.
            threshold: {
                values: [2, 5, 8, 10]
            }
        },
        size: {
            height: 180
        }
      });

   
      $scope.$watch('data', function(val){
        var d = countData(val);
        chart.load({
          columns: [
            ['Button Presses Per Second ', d]
          ]
        });
      });
    };



    return {
      template: '<div><div class="c3Graph"></div><div class="c3Graph2"></div></div>',
      replace: true,
      link: link, 
      restrict: 'E' 
    };
}]);
