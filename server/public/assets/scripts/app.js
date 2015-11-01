/**
 * Created by kellygarskemoore on 10/30/15.
 */
var doMathObject = {};
var getValue = "";

$(document).ready(function(){
    //when number button pressed, call function to store that number in object
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
    $(".calcButtonsDiv").on('click', '#decimal', function(){
        postNumber(".");
    });

    //when the operator button is clicked call function to store string of operator
    $(".calcButtonsDiv").on('click', '#add', function(){
        postMathOperator("Add");
    });
    $(".calcButtonsDiv").on('click', '#subtract', function(){
        postMathOperator("Subtract");
    });
    $(".calcButtonsDiv").on('click', '#multiply', function(){
        postMathOperator("Multiply");
    });
    $(".calcButtonsDiv").on('click', '#divide', function(){
        postMathOperator("Divide");
    });

    //when equal button is clicked will store second number value in object and then call server
    $(".calcButtonsDiv").on('click', '#pressEqual', function(){
        postSecondNumber();
        callServer();
    });

    //clear contents if clear button clicked
    $(".answerDiv").on('click', '#clearBtn', function(){
        $("#showTotalDiv").empty();
        getValue = "";
    })
});

//stores number clicked into variable
function postNumber(inputNumber) {
    getValue = getValue + inputNumber.toString();
    console.log(getValue);
}

//functions to set up the object to send to server
function postMathOperator(mathOperatorString){
    doMathObject["type"] = mathOperatorString;
    doMathObject["myValueX"] = getValue;
    getValue = "";      //reset getValue to be ready to store second input value
}

//store second value in object
function postSecondNumber(){
    doMathObject["myValueY"] = getValue;
}

function callServer(){

    $.ajax({
        type: "POST",
        url: "/data",
        data: doMathObject,
        success: function(data){
            console.log(data);
            myTotal = data.message;
            console.log("Here is answer to go on DOM: ", myTotal);
            $("#showTotalDiv").text(myTotal);  //post value received back from server after math
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