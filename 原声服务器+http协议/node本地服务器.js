/**
 * Created by Administrator on 2017/5/12 0012.
 */
var http=require("http");
http.createServer(function (request, response) {
    response.writeHead(200,{"Content-Type":"text/http;charset=utf-8"});

    if(request.url!=='/favicon.ico'){
        console.log("hello");
    }

    response.end("hello");
}).listen(3000);






