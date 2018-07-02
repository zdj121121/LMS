<%--
  Created by IntelliJ IDEA.
  User: ZDJ
  Date: 2018/7/2
  Time: 17:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=GBK" %>
<jsp:useBean id="connection" scope="page" class="com.ZP.JDBConnection"/>
<html>
<head>
    <title>
        CarMessage_delete page
    </title>
</head>
<body bgcolor="#ffffff">
<%
    String sql="delete tb_CarMessage where Code="+request.getParameter("id");
    boolean bb=connection.executeUpdata(sql);
    if(bb)
    {
%>
<script language="javascript">
    alert("车辆信息已经删除");
</script>
<%
    response.sendRedirect("car_select.jsp");
}else
{
%>
<script language="javascript">
    alert("车辆信息删除失败!!!");
    history.back();
</script>
<%
    }
%>
</body>
</html>

