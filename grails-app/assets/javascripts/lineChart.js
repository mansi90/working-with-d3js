var drawLineChart = function () {

    //Step 1 : Fetch Data
    var lineData = getLineData();

    // Step 2 : Add SVG
    var margin = {top: 30, right: 30, bottom: 50, left: 50 },
        width = 1000 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;

    var svg = createSvg(width, height, margin);

    // Step 3 : Define scale and axes

    var xScale = d3.scale.linear().range([margin.left, width+margin.left]).domain([d3.min(lineData, function (d) {
            return d.x;
        }), d3.max(lineData, function (d) {
            return d.x;
        })]),
        yScale = d3.scale.linear().range([height-margin.top, margin.top]).domain([d3.min(lineData, function (d) {
            return d.y;
        }), d3.max(lineData, function (d) {
            return d.y;
        })]);

    var xAxis = d3.svg.axis().scale(xScale),
        yAxis = d3.svg.axis().scale(yScale).orient('left'); // axis it needs to be oriented to the left

    //Step 4 :  Append both the axis to the SVG and apply the transformation
    svg.append('g')  //g element is used to group SVG shapes together
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + (height-margin.top) + ')')//The transforms are SVG transforms, check http://www.w3.org/TR/SVG/coords.html#TransformAttribute
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + (margin.left) + ',0)')
        .call(yAxis);

    //We have transformed both the axes, keeping the defined margins in view so that the axes don’t touch the SVG margins.


    // Step 5 : Plot coordinates and draw a line.
    var lineFunc = d3.svg.line()
        .x(function(d) {
            return xScale(d.x);
        })
        .y(function(d) {
            return xScale(d.y);
        })
        .interpolate('linear');  //The interpolate('linear') call tells D3 to draw straight lines.
    svg.append('path')
        .attr('d', lineFunc(lineData))
        .attr('stroke', 'blue')
        .attr('stroke-width', 1)
        .attr('fill', 'none');
};

var getLineData = function () {
    return [
        {
            x: 1,
            y: 15
        },
        {
            x: 20,
            y: 15
        },
        {
            x: 40,
            y: 60
        },
        {
            x: 60,
            y: 48
        },
        {
            x: 80,
            y: 5
        },
        {
            x: 100,
            y: 72
        }
    ];
};

var createSvg = function (width, height, margin) {
    var svg = d3.select("#chartArea").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style('background', '#ACBF70');

    return svg;
};