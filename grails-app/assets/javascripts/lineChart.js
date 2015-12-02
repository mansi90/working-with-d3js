function drawLineChart() {

    //Step 1 : Fetch Data
    var lineData = getChartData();

    // Step 2 : Add SVG
    var margin = {top: 100, right: 100, bottom: 100, left: 100}, width = 1000, height = 500;
    createSvg(width, height);


    // Step 3 : Define scale and axes
    var mySVG = d3.select("#visualisation"),

        xScale = d3.scale.linear().range([margin.left, width - margin.right]).domain([0, 100 ]),
        yScale = d3.scale.linear().range([height - margin.top, margin.bottom]).domain([0, 100]),

        xAxis = d3.svg.axis().scale(xScale),
        yAxis = d3.svg.axis().scale(yScale).orient('left'); // y-axis it needs to be oriented to the left

    //Step 4 :  Append both the axis to the SVG and apply the transformation
//    console.log(typeof(xAxis));
    mySVG.append("g")             //g element is used to group SVG shapes together
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")") //The transforms are SVG transforms
        .call(xAxis) //  When you use "call" on a selection you are calling the function passed in (xAxis) on the elements (g) of the selection.
        .append("text")
        .attr("y", '3em')
        .attr("x", "30em")
        .text("Quantity");
    // The translate() function takes one or two values which specify the horizontal and vertical translation values, respectively.
    // tx represents the translation value along the x-axis;
    // ty represents the translation value along the y-axis.

    mySVG.append("g")   //We create an SVG Group Element to hold all the elements that the axis function produces.
        .attr("class", "y-axis")
        .attr("transform", "translate(" + (margin.left) + ",0)")
        .call(yAxis)
        .append("text")
        .attr("y", "16em")
        .attr("x", "-5.5em")
        .text("Price ($)");
    //We have transformed both the axes, keeping the defined margins in view so that the axes don’t touch the SVG margins.

    // Step 5 : Plot coordinates and draw a line.
    var path = drawLine(mySVG, xScale, yScale, lineData);

    highlightOnMouseHover(path);

    applyTooltips(mySVG, lineData, xScale, yScale);
};

var drawLine = function (svg, xScale, yScale, lineData) {
    var lineFunc = d3.svg.line()
        .x(function (obj) {
            return xScale(obj.quantity);
        })
        .y(function (obj) {
            return yScale(obj.price);
        });

    var path = svg.append("path")          //SVG Paths represent the outline of a shape that can be stroked, filled, used as a clipping path, or any combination of all three. We can draw rectangles, circles, ellipses, polylines, polygons, straight lines, and curves through path
        .attr("d", lineFunc(lineData))
        .attr("stroke", '#87CEEB')
        .attr("stroke-width", 3)
        .attr("fill", "none");

    return path;
};

var highlightOnMouseHover = function (path) {
    path.on('mouseover', function (obj) {
        d3.select(this)
            .attr('stroke', '#00688B');
    })
        .on('mouseout', function (obj) {
            d3.select(this)
                .attr('stroke', '#87CEEB');
        });
};

var addTooltipDiv = function () {
    var tooltipDiv = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    return tooltipDiv;
};

var applyTooltips = function (svg, lineData, xScale, yScale) {
    // Define the div for the tooltip
    var tooltipDiv = addTooltipDiv();

    // Add the scatterplot
    svg.selectAll("circle")
        .data(lineData)
        .enter().append("circle")
        .style("fill", '#00688B')
        .attr("r", 5)
        .attr("cx", function (obj) {
            return xScale(obj.quantity);
        })
        .attr("cy", function (obj) {
            return yScale(obj.price);
        })
        .on("mouseover", function (obj) {
            tooltipDiv.transition()
                .duration(200)
                .style("opacity", .9);
            tooltipDiv.html("Quantity : " + obj.quantity + "<br/>Price : " + obj.price)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function (obj) {
            tooltipDiv.transition()
                .duration(500)
                .style("opacity", 0);
        });

};