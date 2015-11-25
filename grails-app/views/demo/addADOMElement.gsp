<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <asset:javascript src="jquery-1.11.1.min.js"/>
    <asset:javascript src="d3.min.js"/>
    <script type="text/javascript">
        $(document).ready(function(){
            var p = d3.select("body")
                    .append("p");

            console.log(p);
        })
    </script>
</head>

<body>

</body>
</html>