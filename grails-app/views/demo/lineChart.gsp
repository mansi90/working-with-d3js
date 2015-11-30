<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:javascript src="jquery-1.11.1.min.js"/>
    <asset:javascript src="lineChart.js"/>
    <asset:javascript src="d3.min.js"/>
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