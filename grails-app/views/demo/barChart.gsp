<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:javascript src="jquery-1.11.1.min.js"/>
    <asset:javascript src="d3.min.js"/>
    <asset:javascript src="chartUtility.js"/>
    <asset:javascript src="barChart.js"/>
    <script type="text/javascript">
        $(document).ready(function () {
            drawBarChart();
        })
    </script>
</head>

<body>
<div id="chartArea" style="margin: 30px;"></div>
</body>
</html>