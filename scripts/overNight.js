"use strict";

// Submission
const submit_btn = document.getElementById("submit_btn_boom");


const isKingSizeRadioBtn = document.getElementById("isKingSizeRadio");
const isQueenSizeRadioBtn = document.getElementById("isQueenSizeRadio");

// discount
const seniorsDiscount = document.getElementById("seniorsDiscount");
const military = document.getElementById("Military");

// Display the results
const originalRoomAmount = document.getElementById("originalRoomAmount");
const discountAmount = document.getElementById("discountAmount");
const roomPrice = document.getElementById("roomPrice");
const tax = document.getElementById("tax");
const pricePerDay = document.getElementById("pricePerDay");

window.onload = function () {
    submit_btn.onclick = calculateStayCost;

}

function calculateStayCost() {
    // User input
    const isCheckedIn = new Date(checkIn.value);
    const nights = parseFloat(howManyNights.value);
    const isKingSize = isKingSizeRadioBtn.checked;
    const isQueenSize = isQueenSizeRadioBtn.checked;
    const isTwoBedroom = twoBedroomSuite.checked;
    const isSeniorsDiscount = seniorsDiscount.checked;
    const isMilitaryDiscount = military.checked;

    // Room rate calculation
    let normalRate = 0;
    if (isKingSize) {
        normalRate = 250;
    } else if (isQueenSize) {
        normalRate = 150;
    } else if (isTwoBedroom) {
        normalRate = 350;
    }

    if (isCheckedIn.getMonth() >= 5 && isCheckedIn.getMonth() <= 7) {
        normalRate += 100;
    }

    const roomAmount = normalRate * nights;

    // Discount calculation
    let discount = 0;
    if (isSeniorsDiscount) {
        discount += roomAmount * 0.1;
    }
    if (isMilitaryDiscount) {
        discount += roomAmount * 0.2;
    }

    // Display results
    disPlayResults(roomAmount, discount);
}

function disPlayResults(roomAmount, discount) {
    originalRoomAmount.innerText = `${roomAmount.toFixed(2)}`;
    discountAmount.innerText = `${discount.toFixed(2)}`;
    roomPrice.innerText = `${(roomAmount - discount).toFixed(2)}`;
    tax.innerText = `${(0.12 * roomAmount).toFixed(2)}`;
    pricePerDay.innerText = `${(roomAmount / parseFloat(howManyNights.value)).toFixed(2)}`;
}
