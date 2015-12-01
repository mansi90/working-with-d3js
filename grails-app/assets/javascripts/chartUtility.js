var getChartData = function () {
    return [
        {
            quantity: 1,
            price: 45
        },
        {
            quantity: 5,
            price: 15
        },
        {
            quantity: 20,
            price: 90
        },
        {
            quantity: 40,
            price: 23
        },
        {
            quantity: 60,
            price: 48
        },
        {
            quantity: 80,
            price: 5
        },
        {
            quantity: 100,
            price: 72
        }
    ];
};


var createSvg = function (width, height) {
    var svg = d3.select("#chartArea").append("svg")
        .attr('id', 'visualisation')
        .attr("width", width)
        .attr("height", height)
        .style('border', '1px solid #ccc');

    return svg;
};
