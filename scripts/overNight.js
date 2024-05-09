"use strict";

//user input
const userInputName = document.getElementById("nameInput").value;
const userInputemail = document.getElementById("emailInput").value;
const checkIn = new Date(document.getElementById("checkIn").value);
const howManyAdults = parseFloat(document.getElementById("howManyAdults").value);
const howManyNights = (parseFloatdocument.getElementById("howManyNights").value);
const howManyKids = parseFloat(document.getElementById("howManyKids"));
//all Buttons
// radio
const isKingSizeRadioBtn = document.getElementById("isKingSizeRadio").checked;
const isQueenSizeRadioBtn = document.getElementById("isQueenSizeRadio").checked;
const twoBedroomSuite = document.getElementById("twoBedroomSuite").checked;

// discounts
const seniorsDiscount = document.getElementById("seniorsDiscount").checked;
const military = document.getElementById("military").checked;

// const a_a_a_discount = document.getElementById("a_a_a_discount");


// submission
const submit_btn = document.getElementById("submit_btn");

// display the results
const originalRoomAmount = document.getElementById("originalRoomAmount");
const discountAmount = document.getElementById("discountAmount");
const roomPrice = document.getElementById("roomPrice");
const tax = document.getElementById("tax");
const pricePerDay = document.getElementById("pricePerDay");



window.onload = function () {
    submit_btn.onclick = buttonIsClicked
}


function buttonIsClicked() {
    let howmanyDay = 
}
