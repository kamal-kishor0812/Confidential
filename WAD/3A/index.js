var http = require("http");
var fs = require("fs");
var path = require("path");


//creating server
http.createServer((req,res)=>
{

    var url = req.url;

        fs.readFile(__dirname+req.url+".html",(err,data)=>
        {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
              }
              res.writeHead(200);
              res.end(data);
            });
            
}).listen(3000);
    



    