


var dataObj = []

for (let i = 0; i < 5; i++) {
    dataObj[i] = {
        potenial: 5 + i,
        actual: 12 + (2 * i),
        latest: 9 + (i)
    }
}

console.log(dataObj)

// Create variable for the SVG
var svg = d3.select("body").append("svg")
          .attr("height","50%")
          .attr("width","50%");

// Select, append to SVG, and add attributes to rectangles for bar chart
svg.selectAll(".bar")
    .data(dataObj)
    .enter().append("rect")
          .attr("class", "bar")
          .attr("height", function(d, i) {return (d.actual * 10)})
          .attr("width","40")
          .attr("x", function(d, i) {return (i * 60) + 25})
          .attr("y", function(d, i) {return 400 - (d.actual * 10)});

svg.selectAll(".bar3")
          .data(dataObj)
          .enter().append("rect")
              .attr("class", "bar3")
              .attr("height", function(d, i) {return (d.latest * 10)})
              .attr("width","40")
              .attr("x", function(d, i) {return (i * 60) + 25})
              .attr("y", function(d, i) {return 400 - (d.latest * 10)});
      

svg.selectAll(".bar2")
    .data(dataObj)
    .enter().append("rect")
        .attr("class", "bar2")
        .attr("height", function(d, i) {return (d.potenial * 10)})
        .attr("width","40")
        .attr("x", function(d, i) {return (i * 60) + 25})
        .attr("y", function(d, i) {return 400 - (d.potenial * 10)});


// Select, append to SVG, and add attributes to text
svg.selectAll(".text")
    .data(dataObj)
    .enter().append("text")
    .text(function(d) {return d.actual})
           .attr("class", "text")
           .attr("x", function(d, i) {return (i * 60) + 36})
           .attr("y", function(d, i) {return 415 - (d.actual * 10)});
// Select, append to SVG, and add attributes to text
svg.selectAll(".text2")
    .data(dataObj)
    .enter().append("text2")
    .text(function(d) {return d.potenial})
           .attr("class", "text2")
           .attr("x", function(d, i) {return (i * 60) + 36})
           .attr("y", function(d, i) {return 415 - (d.potenial * 10)});
