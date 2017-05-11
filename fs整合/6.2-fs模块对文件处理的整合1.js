/**
 * Created by Administrator on 2017/5/9 0009.
 */
var fs=require("fs");
var aaa={
/*读取文件*/
    readFile:function (url) {
        fs.readFile(url,"utf-8",function (err, data) {
            if(err) throw err;
            console.log(data);
        })
    },
/*写入文件（覆盖）*/    
    writeFile:function (url,data) {
        fs.writeFile(url,data,function (err) {
            if(err) throw err;
            console.log("写入成功！");
        })
    },
/*写入文件（不覆盖）*/
    appendFile:function (url,data) {
        fs.appendFile(url,data,function (err) {
            if(err) throw err;
            console.log("写入成功！");
        })
    },
/*删除文件*/
    unlink:function (url) {
        fs.unlink(url,function (err) {
            if(err) throw err;
            console.log("删除成功！");
        })
    },
/*重命名文件*/
    rename:function (url,newurl) {
        fs.rename(url,newurl,function (err) {
            if(err) throw err;
            console.log("重命名成功！");
        })
    },
/*复制文件*/
    duplicate:function (url,copyurl) {
        fs.readFile(url,"utf-8",function (err, data) {
            if(err) throw err;
            fs.writeFile(__dirname+'/'+copyurl,data,function (err) {
                if(err) throw err;
                console.log("复制成功！");
            })
        })
    }
    
    
    
};
/*导出*/
module.exports=aaa;







