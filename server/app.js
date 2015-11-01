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

    var didMath = 0;
    if(request.body.type == "Add"){
        didMath = parseFloat(request.body.myValueX) + parseFloat(request.body.myValueY);
    } else if(request.body.type == "Subtract") {
        didMath = parseFloat(request.body.myValueX) - parseFloat(request.body.myValueY);
    } else if(request.body.type == "Multiply") {
        didMath = parseFloat(request.body.myValueX) * parseFloat(request.body.myValueY);
    } else if(request.body.type == "Divide") {
        didMath = parseFloat(request.body.myValueX) / parseFloat(request.body.myValueY);
    }
    console.log("Here is server: ", didMath);
    response.send({message: didMath});
});

app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"), function(){
    console.log("MEOW! " + app.get("port"));
});