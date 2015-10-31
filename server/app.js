var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

//app.use('/', index);

app.post("/data", function(request, response){
    console.log(request.body.myValueX);
    var didMath = 0;
    if(request.body.type == "Add"){
        didMath = parseInt(request.body.myValueX) + parseInt(request.body.myValueY);
    } else if(request.body.type == "Subtract") {
        didMath = parseInt(request.body.myValueX) - parseInt(request.body.myValueY);
    } else if(request.body.type == "Multiply") {
        didMath = parseInt(request.body.myValueX) * parseInt(request.body.myValueY);
    } else if(request.body.type == "Divide") {
        didMath = parseInt(request.body.myValueX) / parseInt(request.body.myValueY);
    }

    response.send({message: didMath});
});

app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"), function(){
    console.log("MEOW! " + app.get("port"));
});