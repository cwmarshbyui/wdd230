/* This is where I'll put the get visits js code. */
// initialize display elements
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	console.log("visitsDisplay.textContent = numVisits; " + numVisits);
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
};

// increment the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// You can view the localStorage data using the Applications panel in the browsers's DevTools.

