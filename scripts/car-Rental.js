"use strict";

// Input elements
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElecTollTagCheckbox = document.getElementById("inputOptElecTollTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAsstCheckbox = document.getElementById("inputOptRoadsideAsstCheckbox");
const inputUnder25NoRadio = document.getElementById("inputUnder25NoRadio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");


window.onload = function () {
    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClick;
};


function onEstimateTotalCostButtonClick() {
    // get known values

    let numOfDays = inputNumOfDays.value;

    let isOptElecTollTag = inputOptElecTollTagCheckbox.checked;
    let isOptGPS = inputOptGPSCheckbox.checked;
    let isOptRoadAsst = inputOptRoadsideAsstCheckbox.checked;

    let isUnder25 = inputUnder25YesRadio.checked;

    console.log(numOfDays);
    console.log(isOptElecTollTag);
    console.log(isOptGPS);
    console.log(isOptRoadAsst);
    console.log(isUnder25);

    // calculate unknown values
    let carRentalAmount = 29.99 * numOfDays;

    let optionsAmount = 0;

    if (isOptElecTollTag) {
        optionsAmount += (3.95 * numOfDays);
    }

    if (isOptGPS) {
        optionsAmount += (2.95 * numOfDays);
    }

    if (isOptRoadAsst) {
        optionsAmount += (2.95 * numOfDays)
    }

    let surchargeAmount;

    if (isUnder25) {
        surchargeAmount = 0.30 * (carRentalAmount + optionsAmount);
    }
    else {
        surchargeAmount = 0;
    }

    let totaldueAmount = carRentalAmount + optionsAmount + surchargeAmount;



    // display the results
    outputCarRental.innerHTML = carRentalAmount
    outputOptions.innerHTML = optionsAmount;
    outputSurcharge.innerHTML = surchargeAmount;
    outputTotal.innerHTML = totaldueAmount;


}