function drawLineChart() {

    //Step 1 : Fetch Data
    var lineData = getChartData();

    // Step 2 : Add SVG
    var margin = {top: 100, right: 100, bottom: 100, left: 100}, width = 1000, height = 500;
    createSvg(width, height);


    // Step 3 : Define scale and axes
    var vis = d3.select("#visualisation"),

        xMin = d3.min(lineData, function (d) {
            return d.quantity;
        }),
        xMax = d3.max(lineData, function (d) {
            return d.quantity;
        }),

        yMin = d3.min(lineData, function (d) {
            return d.price;
        }),
        yMax = d3.max(lineData, function (d) {
            return d.price;
        }),

        xRange = d3.scale.linear().range([margin.left, width - margin.right]).domain([xMin, xMax ]),
        yRange = d3.scale.linear().range([height - margin.top, margin.bottom]).domain([yMin, yMax ]),

        xAxis = d3.svg.axis().scale(xRange),
        yAxis = d3.svg.axis().scale(yRange).orient('left'); // y-axis it needs to be oriented to the left

    //Step 4 :  Append both the axis to the SVG and apply the transformation
    vis.append("g")             //g element is used to group SVG shapes together
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")") //The transforms are SVG transforms, check http://www.w3.org/TR/SVG/coords.html#TransformAttribute
        .call(xAxis);
    /* .append("text")
     .attr("y", '3em')
     .attr("x", "30em")
     .text("Quantity");*/

    vis.append("g")
        .attr("class", "y-axis")
        .attr("transform", "translate(" + (margin.left) + ",0)")
        .call(yAxis);
    /*.append("text")
     .attr("transform", "rotate(-90)")
     .attr("y", "-3em")
     .attr("x", "-13em")
     .style("text-anchor", "end")
     .text("Price ($)");*/
    //We have transformed both the axes, keeping the defined margins in view so that the axes don’t touch the SVG margins.

    // Step 5 : Plot coordinates and draw a line.
    var lineFunc = d3.svg.line()
        .x(function (d) {
            return xRange(d.quantity);
        })
        .y(function (d) {
            return yRange(d.price);
        });

    vis.append("path")          //SVG Paths represent the outline of a shape that can be stroked, filled, used as a clipping path, or any combination of all three. We can draw rectangles, circles, ellipses, polylines, polygons, straight lines, and curves through path
        .attr("d", lineFunc(lineData))
        .attr("stroke", '#00688B')
        .attr("stroke-width", 1)
        .attr("fill", "none");

};