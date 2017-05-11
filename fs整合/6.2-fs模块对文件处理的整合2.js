/**
 * Created by Administrator on 2017/5/9 0009.
 */
    var aaa=require("./6.2-fs模块对文件处理的整合1.js");
/*读取文件*/
    aaa.readFile("X2.txt");
/*写入文件（覆盖）*/
    aaa.writeFile("X2.txt","好好学习，天天向上！");
/*写入文件（不覆盖）*/
    aaa.appendFile("X2.txt","goodgoodstudy,daydayup!");
/*删除文件*/
    aaa.unlink("X3.txt");
/*重命名文件*/
    aaa.rename("X4.txt","X4new.txt");
/*复制文件*/
    aaa.duplicate("X2.txt","X3.txt");






