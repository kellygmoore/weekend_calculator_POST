/**
 * Created by kellygarskemoore on 10/30/15.
 */
var doMathObject = {};
var getValue = "";
//var whichNumTracker = 0;

$(document).ready(function(){
    //when number button pressed, POST that number
    $(".calcButtonsDiv").on('click', '#one', function(){
        postNumber(1);
    });
    $(".calcButtonsDiv").on('click', '#two', function(){
        postNumber(2);
    });
    $(".calcButtonsDiv").on('click', '#three', function(){
        postNumber(3);
    });
    $(".calcButtonsDiv").on('click', '#four', function(){
        postNumber(4);
    });
    $(".calcButtonsDiv").on('click', '#five', function(){
        postNumber(5);
    });
    $(".calcButtonsDiv").on('click', '#six', function(){
        postNumber(6);
    });
    $(".calcButtonsDiv").on('click', '#seven', function(){
        postNumber(7);
    });
    $(".calcButtonsDiv").on('click', '#eight', function(){
        postNumber(8);
    });
    $(".calcButtonsDiv").on('click', '#nine', function(){
        postNumber(9);
    });
    $(".calcButtonsDiv").on('click', '#zero', function(){
        postNumber(0);
    });

    //when the operator button is clicked
    $(".buttonsDiv").on('click', '#add', function(){
        postMathOperator("Add");
    });
    $(".buttonsDiv").on('click', '#subtract', function(){
        postMathOperator("Subtract");
    });
    $(".buttonsDiv").on('click', '#multiply', function(){
        postMathOperator("Multiply");
    });
    $(".buttonsDiv").on('click', '#divide', function(){
        postMathOperator("Divide");
    });

    $("#equalDiv").on('click', '#pressEqual', function(){
        postSecondNumber();
        callServer();
    });

    //clear contents if clear button clicked
    $(".answerDiv").on('click', '#clearBtn', function(){
        $("#showTotalDiv").empty();
        getValue = "";
    })
});

function postNumber(inputNumber) {
    getValue = getValue + inputNumber.toString();
    console.log(getValue);
}

//functions to set up the object to send to server
function postMathOperator(mathOperatorString){
    doMathObject["type"] = mathOperatorString;
    doMathObject["myValueX"] = getValue;
    getValue = "";
}

function postSecondNumber(){
    doMathObject["myValueY"] = getValue;
}


    //whichNumTracker ++;
    //if(whichNumTracker == 1) {
    //    doMathObject["myValueX"] = inputNumber;
    //} else if(whichNumTracker == 2){
    //    doMathObject["myValueY"] = inputNumber;
    //}

function callServer(){

    $.ajax({
        type: "POST",
        url: "/data",
        data: doMathObject,
        success: function(data){
            console.log(data);
            myTotal = data.message;
            $("#showTotalDiv").text(myTotal);
            whichNumTracker = 0;
        }
    });
}









//use the .each to put inputs into an object to send to server
//myValueX myValueY
//$.each($("#inputForm").serializeArray(), function(i, field){
//   doMathObject[field.name] = field.value;
//});

//then add the button type into the object

//erase the input field
// $("#inputForm").find("input[type=text]").val("");


//make the call to the server "hello...is it me you're looking for?" post the object