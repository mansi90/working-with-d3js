var drawBarChart = function () {
    //Step 1 : Fetch Data
    var barData = getChartData();

    // Step 2 : Add SVG
    var margin = {top: 50, right: 50, bottom: 50, left: 50}, width = 1000, height = 500;
    createSvg(width, height);

    // Step 3 : Define scale and axes
    var vis = d3.select('#visualisation'),

        xRange = d3.scale.linear().range([margin.left, width - margin.right]).domain([d3.min(barData, function (d) {
            return d.x;
        }),
            d3.max(barData, function (d) {
                return d.x;
            })
        ]),

        yRange = d3.scale.linear().range([height - margin.top, margin.bottom]).domain([d3.min(barData, function (d) {
            return d.y;
        }),
            d3.max(barData, function (d) {
                return d.y;
            })
        ]),

        xAxis = d3.svg.axis().scale(xRange),
        yAxis = d3.svg.axis().scale(yRange).orient('left'); // y-axis it needs to be oriented to the left


    //Step 4 :  Append both the axis to the SVG and apply the transformation
    vis.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
        .call(xAxis);

    vis.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + (margin.left) + ',0)')
        .call(yAxis);


    // Step 5 Create rectangular bars for the chart data
    vis.selectAll('rect')
        .data(barData)
        .enter()
        .append('rect')
        .attr('x', function (d) { // sets the x position of the bar
            return xRange(d.x);
        })
        .attr('y', function (d) { // sets the y position of the bar
            return yRange(d.y);
        })
        .attr('width', 40) // sets the width of bar
        .attr('height', function (d) {      // sets the height of bar
            return ((height - margin.bottom) - yRange(d.y));
        })
        .attr('fill', 'grey');   // fills the bar with grey color
};