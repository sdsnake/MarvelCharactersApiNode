var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use('/static', express.static(__dirname + '/static'));

app.get('/',function(req,res){
    

  res.cookie('marvelCookie' , '10d7e52aa4e078ef0dcbb2c198ad41ea').sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});



app.listen(3000);
console.log("Server running at Port 3000");