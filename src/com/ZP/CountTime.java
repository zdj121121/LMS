package com.ZP;

import java.text.DateFormat;
import java.util.Date;

/**
 * @ClassName CountTime
 * @Description 计时
 * @Author ZDJ
 * @Date 2018/7/2 14:59
 * @Version 1.0
 **/

public class CountTime {

    /**
      * @author ZDJ
      * @Description 获取当前时间
      * @Date 15:02 2018/7/2
      * @Param []
      * @return java.lang.String
      **/
    public String currentlyTime(){
        Date date = new Date();
        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.FULL);
        return dateFormat.format(date);
    }
}
