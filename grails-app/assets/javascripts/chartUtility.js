var getChartData = function () {
    return [
        {
            x: 1,
            y: 45
        }, {
            x: 5,
            y: 15
        },
        {
            x: 20,
            y: 90
        },
        {
            x: 40,
            y: 23
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


var createSvg = function (width, height) {
    var svg = d3.select("#chartArea").append("svg")
        .attr('id', 'visualisation')
        .attr("width", width)
        .attr("height", height)
        .style('background', '#ACBF70');

    return svg;
};
