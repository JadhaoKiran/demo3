var express = require('express')
var app = express();

app.get("/", (req, resp)=>
{
   resp.send( "<h3>Welcome to exam </h3>"
    + "<h4>List of Names </h4>"
    + "<ol>"
    +"<li> Kiran</li>"
    +"<li> Kiran</li>"
    +"<li> Kiran</li>"
    +"</ol>"
   )
});

app.get("/home", (req,resp)=>{

    "<h1>Welcome to Home Page </h1>"
})

app.listen(7000);
console.log("server start at port 7000");