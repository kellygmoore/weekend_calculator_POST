/**
 * Created by kellygarskemoore on 10/30/15.
 */
//var myTotal = 0;

$(document).ready(function(){
    //perform the math operation when button clicked
    $(".buttonsDiv").on('click', '#add', function(){
        postSendInputs("Add");
    });
    $(".buttonsDiv").on('click', '#subtract', function(){
        postSendInputs("Subtract");
    });
    $(".buttonsDiv").on('click', '#multiply', function(){
        postSendInputs("Multiply");
    });
    $(".buttonsDiv").on('click', '#divide', function(){
        postSendInputs("Divide");
    });
    $(".answerDiv").on('click', '#clearBtn', function(){
        $("#showTotalDiv").empty();
    })

});

//post to server to do the math calculations
function postSendInputs(mathOperatorString){
    var doMathObject = {};
    //use the .each to put inputs into an object to send to server
                                    //myValueX myValueY
    $.each($("#inputForm").serializeArray(), function(i, field){
       doMathObject[field.name] = field.value;
    });

    //then add the button type into the object
    doMathObject["type"] = mathOperatorString;

    //erase the input field
    $("#inputForm").find("input[type=text]").val("");


    //make the call to the server "hello...is it me you're looking for?" post the object
    $.ajax({
        type: "POST",
        url: "/data",
        data: doMathObject,
        success: function(data){
            console.log(data);
            myTotal = data.message;
            $("#showTotalDiv").text(myTotal);

        }
    })
}
