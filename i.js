let region = process.env.AWS_REGION; //e.g. us-east-1
var http = require('http');


exports.handler = (event, context, callback) => 
{

    
    var html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + 
        '<body><h1>HTML from <font color="#000090">API Gateway<font color="#000000">/<font color="#209000">Lambda<font color="#000000"></h1>'+
        '<br><br>Hello from NodeJS Lambda! <br><i>Random number=<font color="#009040"><b>'+(Math.random()*10)+'</i></b>'+
        '<br><br><font color="#000000">Test LAB in region: <b>'+region+'</b></body></html>';
    
    context.succeed(html);
};
