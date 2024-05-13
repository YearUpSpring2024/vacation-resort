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
const totalOutput = document.getElementById("totalCost");

const confirmationOutput = document.getElementById("confirmationOutput");

window.onload = function () {
    submit_btn.onclick = calculateStayCost;

}

function calculateStayCost() {

    // the form kept resubmitting after displaying the results
    // event.preventDefault()
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
    const taxAmount = 0.12 * roomAmount;

    const totalCost = roomAmount - discount + taxAmount;

    // generate confirmation number
    const confirmationNumber = getThenumber(nameInput.value, isCheckedIn, nights, howManyNights.value, howManyKids.value);

    // Display results
    disPlayResults(roomAmount, discount, totalCost, taxAmount, confirmationNumber);
}

function getThenumber(name, checkIn, nights, adults, kids) {
    const month = ("0" + (checkIn.getMonth() + 1)).slice(-2); //add one getmonth return 0-indexed
    console.log(month)
    const year = (checkIn.getFullYear().toString()).slice(-2);
    console.log(year);
    const confirmation = `${name.substring(0, 3)}-${month}${year}-${nights}:${adults}:${kids}`;
    return confirmation.toLocaleUpperCase();

}

function disPlayResults(roomAmount, discount, totalCost, taxAmount, confirmationNumber) {
    originalRoomAmount.innerHTML = `The Original Room cost: ${roomAmount.toFixed(2)}`;
    discountAmount.innerHTML = `The Discount, if any: ${discount.toFixed(2)}`;
    roomPrice.innerHTML = `The Discounted Room cost: ${(roomAmount - discount).toFixed(2)}`;
    tax.innerHTML = `The Tax: ${taxAmount.toFixed(2)}`;
    pricePerDay.innerHTML = `Price per day: ${(roomAmount / parseFloat(howManyNights.value)).toFixed(2)}`;
    totalOutput.innerHTML = `The Total cost is: ${totalCost.toFixed(2)}`;
    confirmationOutput.innerHTML = "confirmation Number: " + confirmationNumber.toString(2);

}
