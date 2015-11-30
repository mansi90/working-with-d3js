<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:javascript src="jquery-1.11.1.min.js"/>
    <asset:javascript src="lineChart.js"/>
    <asset:javascript src="d3.min.js"/>
    <script type="text/javascript">
        $(document).ready(function () {

            //Step 1 : Fetch Data
            var lineData = getLineData();

            // Step 2 : Add SVG
            var margin = {top: 10, right: 10, bottom: 80, left: 80 },
                    width = 1000 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;

            var svg = createSvg(width, height, margin);

            // Step 3 : Define scale and axes
            var xScale = d3.scale.linear().range([margin.left, width - margin.right]).domain([d3.min(lineData, function (d) {
                        return d.x;
                    }), d3.max(lineData, function (d) {
                        return d.x;
                    })]),
                    yScale = d3.scale.linear().range([height - margin.top, margin.bottom]).domain([d3.min(lineData, function (d) {
                        return d.y;
                    }), d3.max(lineData, function (d) {
                        return d.y;
                    })]);

            var xAxis = d3.svg.axis().scale(xScale).orient("bottom"), yAxis = d3.svg.axis().scale(yScale).orient('left');

            //Step 4 : Apply these axes on svg
            svg.append('g')  //g element is used to group SVG shapes together
                    .attr('class', 'x axis')
                    .attr('transform', 'translate(0,' + (height - margin.top) + ')')//The transforms are SVG transforms, check http://www.w3.org/TR/SVG/coords.html#TransformAttribute
                    .call(xAxis);

            svg.append('g')
                    .attr('class', 'y axis')
                    .attr('transform', 'translate(' + (margin.left) + ',0)')
                    .call(yAxis);


        })
    </script>
</head>

<body>
<div id="chartArea" style="margin: 30px;"></div>
</body>
</html>