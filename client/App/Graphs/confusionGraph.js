angular.module('confusionGraph',[]).directive('confusionGraph', ['dataFactory', 

  function (dataFactory) {

    var link = function ($scope, $el, $attrs) {
     
      var segments = 30, // 
        interval = 1000, //millesecond delay
        maxStudents = 60,
        now = new Date(Date.now()),
        confused = 0;
        for (var i = 0, data = []; i < segments; i++) {
            data[i] = 0 
      };

      var margin = {top: 20, right: 20, bottom: 20, left: 20};
      var maxWidth = document.body.offsetWidth - margin.right;
      var maxHeight = document.body.offsetHeight - margin.top - margin.bottom;
      var width = maxWidth;
      var height = maxHeight;
      // var width = 500;
      // var height = 500;

      var x = d3.time.scale()
        .domain([now - segments * interval, now])
        .range([0, width]); 

      var y = d3.scale.linear()
        .domain([0,maxStudents])
        .range([height, 0]);

      var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d, i) { return x(now - (segments - 1 - i) * interval); }) // calculate position once on posting!
        .y(function(d, i) { return y(d); });

      var svg = d3.select(".d3Graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //This doesn't really work, but no one calls it anyway
      function setGraphDimensions(newWidth, newHeight, newX, newY){
        width = newWidth > maxWidth ? width : newWidth;
        height = newHeight > maxHeight? height : newHeight;
        newX = newX || 0;
        newY = newY || 0;

        d3.select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("x", newX)
        .attr("y", newY);
      };

      var axis = svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")") // move to bottom of screen
        .call(x.axis = d3.svg.axis().scale(x).orient("bottom"));

      var path = svg.append("g")
        .append("path")
          .attr("class","graphline")
          .datum(data);

      //Given a time since confusion, return confusion value 
      var confusionFunction = function(timeSinceConfusion){
        return (timeSinceConfusion < 3000) ? 1 : (3000/timeSinceConfusion);
      };

      var sum = function(a,b){
        return a+b;
      };

      var timeSinceConfusion = function(confusionObject){
        return (new Date()) - (new Date(confusionObject.createdAt));
      };

      var calculateConfusion = function(){
        if ($scope.confusionCollection.length > 0 ){
          var confusionContributionPer = $scope.confusionCollection.map(function(confusionObj){
            return confusionFunction(timeSinceConfusion(confusionObj));
          });
          var totalConfusionNow = confusionContributionPer.reduce(sum);
        }else
          totalConfusionNow = 0;
        
        return Math.min(totalConfusionNow, maxStudents);
      };

      function update() {
        // update the domains
        $scope.confusionCollection = dataFactory.confusedStudents();
        now = new Date();
        x.domain([now - (segments - 2) * interval, now - interval]);

        // push the accumulated confused onto the back, and reset the confused
        data.push(calculateConfusion());

        // redraw the line
        path
          .attr("d", line)
          .attr("transform", null);

        // slide the x-axis left
        axis.call(x.axis)
          .selectAll("text")
            .attr("y",10)
            .attr("transform", "rotate(45)")
            .style("text-anchor", "start");

        // slide the line left
        path.transition()
          .duration(interval)
          .ease("linear")
          .attr("transform", "translate(" + x(now - (segments - 1) * interval) + ")")
          .each("end",update);

        // pop the old data point off the front
        data.shift();
      }

      update();

      function resize() {
        svg.attr("width", $el[0].clientWidth);
        svg.attr("height", $el[0].clientWidth); //It's a square
      }

      $scope.$on('windowResize',resize);


    };
    return {
      template: '<div class="d3Graph"></div>',
      replace: true,
      link: link, 
      restrict: 'E' 
    };
}]);
