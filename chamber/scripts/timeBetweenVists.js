/* This is where I'll put the get visits js code. */
// initialize display elements
const timeBetweenVisitsDisplay = document.querySelector(".discovertimebetweenvisits");

// get the stored value in localStorage
let lastVisitTimeString = Number(window.localStorage.getItem("visitTime-ls"));
let lastVisitTime = new Date(lastVisitTimeString);

// get the current visit time
let currentVisitTimeString = Date().toString();
let currentVisitTime = new Date(currentVisitTimeString);

//determine if this is the first visit or display the time between last visit.
if (lastVisitTime !== null) {

    // calculate difference between visit times.
    let datediff = currentVisitTime - lastVisitTime;
    daysDiff = Math.floor(datediff/1000/60/60/24).toString();

    // Set the value in html output.
    timeBetweenVisitsDisplay.textContent = daysDiff.concat(" days betweem visits.");
} else {
    timeBetweenVisitsDisplay.textContent = `This the first visit!`;
}

// timeBetweenVisitsDisplay.textContent = currentVisitTime;

// store the new number of visits value
localStorage.setItem("visitTime-ls", currentVisitTimeString);