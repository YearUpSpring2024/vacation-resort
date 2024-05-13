"use strict";

// console.log("connection has been successful");

function toggleDiningsOptions() {
    const payAsYouGo = document.getElementById("payAsyouGo");
    const allInclusiveOption = document.getElementById("allInclusiveOption");


    const payAsYouGoDiv = document.getElementById("payAsYouGoDiv");
    const allInclusiveDiv = document.getElementById("allInclusiveDiv");


    if (payAsYouGo.checked) {
        payAsYouGoDiv.style.display = "block";
        allInclusiveDiv.style.display = "none";
    } else if (allInclusiveOption.checked) {
        payAsYouGoDiv.style.display = "none";
        allInclusiveDiv.style.display = "block";
        // increase message
        const increaseAmount = calculateIncrease();
        document.getElementById("increaseMessage").innerHTML = `The all Inclusive has been added to your reservation. The price of your stay has increased by ${increaseAmount.toFixed(2)} based on selection here.`
    }
}


function calculateIncrease() {
    // grab number of stay
    const numbOfDays = 7;
    const numbOfAdults = 3; //let's say it's three adults
    const numbOfKids = 4;

    const basicPricePerAdult = 62.50;
    const premiumPricePerAdultPerDay = 80.00;
    const pricePerchildPerDay = 49.99;

    // price for each plan
    const basicTotalPrice = (basicPricePerAdult * numbOfAdults) + (pricePerchildPerDay * numbOfKids);
    const premiumTotalPricePerDay = (premiumPricePerAdultPerDay * numbOfAdults) + (pricePerchildPerDay * numbOfKids);

    //calculate the increase based on the basic or the premium plan

    const increaseAmount = (premiumTotalPricePerDay - basicTotalPrice) * numbOfDays;

    return increaseAmount;

}


window.onload = function () {
    document.getElementById("payAsyouGo").onchange = toggleDiningsOptions;
    document.getElementById("allInclusiveOption").onchange = toggleDiningsOptions;
}