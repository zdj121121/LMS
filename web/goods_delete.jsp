<%--
  Created by IntelliJ IDEA.
  User: ZDJ
  Date: 2018/7/2
  Time: 17:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=GB2312"%>
<jsp:useBean id="connection" scope="page" class="com.ZP.JDBConnection"/>
<html>
<head>
    <title>
        Goods_delete page
    </title>
</head>
<body bgcolor="#ffffff">
<%

    String sql="delete tb_GoodsMeg where ID="+request.getParameter("id");
    boolean dele=connection.executeUpdata(sql);
    if(dele)
    {
%>
<script language="javascript">
    alert("É¾³ý³É¹¦£¡£¡£¡");
</script>
<%
    response.sendRedirect("goods_select.jsp");
}else{
%>
<script language="javascript">
    alert("É¾³ýÊ§°Ü£¡£¡£¡");
    history.back();
</script>
<%
    }
%>
</body>
</html>


