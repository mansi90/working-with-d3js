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


        })
    </script>
</head>

<body>
<div id="chartArea" style="margin: 30px;"></div>
</body>
</html>