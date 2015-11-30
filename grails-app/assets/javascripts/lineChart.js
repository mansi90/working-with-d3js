var getLineData = function(){
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

createSvg = function (width, height, margin) {
    var svg = d3.select("#chartArea").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style('background', '#ACBF70');

    return svg;
};