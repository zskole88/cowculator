"use strict";

$(function() {

    $("#addBtn").on("click", onAddBtnClicked);
    $("#subtractBtn").on("click", onSubtractBtnClicked);
    $("#multiplyBtn").on("click", onMultiplyBtnClicked);
    $("#divideBtn").on("click", onDivideBtnClicked);

});

function onAddBtnClicked() {
    let num1 = Number( $("#num1").val() );
    let num2 = Number( $("#num2").val() );

    let answer = num1 + num2;

    $("#outputArea").html("The result is " + answer);
}

function onSubtractBtnClicked() {
    let num1 = Number( $("#num1").val() );
    let num2 = Number( $("#num2").val() );

    let answer = num1 - num2;

    $("#outputArea").html("The result is " + answer);    
}

function onMultiplyBtnClicked() {
    let num1 = Number( $("#num1").val() );
    let num2 = Number( $("#num2").val() );

    let answer = num1 * num2;

    $("#outputArea").html("The result is " + answer);   
}

function onDivideBtnClicked() {
    let num1 = Number( $("#num1").val() );
    let num2 = Number( $("#num2").val() );

    let answer = num1 / num2;

    $("#outputArea").html("The result is " + answer);   
}