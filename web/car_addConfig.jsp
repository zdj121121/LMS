<%--
  Created by IntelliJ IDEA.
  User: ZDJ
  Date: 2018/7/2
  Time: 17:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=GB2312" import="java.util.Date"%>
<jsp:useBean id="connection" scope="page" class="com.ZP.JDBConnection"/>
<html>
<head>
    <title>
        CarMessageadd_config page
    </title>
</head>
<%!
    Date date=new Date();
    String sql;
%>
<%
    request.setCharacterEncoding("gb2312");

    String numbers=request.getParameter("numbers");
    String types=request.getParameter("type");
    String carname=request.getParameter("carname");
    String usetime=request.getParameter("usetime");
    String loads=request.getParameter("loads");
    String transtyle=request.getParameter("style");
    String drivername=request.getParameter("name");
    String number=request.getParameter("number");
    String styles=request.getParameter("styles");
    String drivertime=request.getParameter("time");
    String meg=request.getParameter("meg");
    String linkman=request.getParameter("linkman");
    String phone=request.getParameter("phone");
    String gremark=request.getParameter("gremark");
    String username=(String)session.getAttribute("name");

    java.sql.Date showdate=new java.sql.Date(date.getYear(),date.getMonth(),date.getDate());

    sql="insert into tb_CarMessage values('"+numbers+"','"+carname+"','"+types+"','"+loads+"','"+usetime+"','"+drivername+"','"+drivertime+"','"+number+"','"+styles+"','"+transtyle+"','"+linkman+"','"+
            phone+"','"+meg+"','"+showdate+"','"+username+"')";



    boolean sert=connection.executeUpdata(sql);



    if(sert)
    {%>
<script language="javascript">
    alert("������ĳ�����Ϣ�Ѿ��ɹ���ɣ�����");
</script>
<%
    response.sendRedirect("car_select.jsp");
}else
{
%>
<script language="javascript">
    alert("������ĳ�����Ϣ����ʧ�ܣ�����");
</script>
<%
        response.sendRedirect("car_select.jsp");
    }
%>
<body bgcolor="#ffffff">
</body>
</html>
