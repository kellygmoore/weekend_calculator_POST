var express = require("express");
var router = express.Router();
var path = require('path');
var didMath = 0;

router.route('/add')
    .post(function(request, response){
        didMath = parseFloat(request.body.myValueX) + parseFloat(request.body.myValueY);
        response.send({message: didMath});
    });

router.route('/subtract')
    .post(function(request, response){
        didMath = parseFloat(request.body.myValueX) - parseFloat(request.body.myValueY);
        response.send({message: didMath});
    });

router.route('/multiply')
    .post(function(request, response){
        didMath = parseFloat(request.body.myValueX) * parseFloat(request.body.myValueY);
        response.send({message: didMath});
    });

router.route('/divide')
    .post(function(request, response){
        didMath = parseFloat(request.body.myValueX) / parseFloat(request.body.myValueY);
        response.send({message: didMath});
    });

router.get("/*", function(request,response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;