<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:javascript src="jquery-1.11.1.min.js"/>
    <asset:javascript src="d3.min.js"/>
    <asset:javascript src="chartUtility.js"/>
    <asset:javascript src="lineChart.js"/>
    <style type="text/css">

div.tooltip {
    position: absolute;
    text-align: center;
    width: 90px;
    height: 30px;
    padding: 2px;
    font: 12px sans-serif;
    background: lightsteelblue;
    border: 0px;
    border-radius: 8px;
    pointer-events: none;
}

</style>
    <script type="text/javascript">
        $(document).ready(function () {
            drawLineChart();
        })
    </script>
</head>

<body>
<div id="chartArea" style="margin: 30px;"></div>
</body>
</html>