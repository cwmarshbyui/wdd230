// This will determine the day of the week and if
// there needs to be and advertisement to join the meet and greet.
const display = document.querySelector("article");

let currentDate = new Date();
let currentDay = currentDate.getDay();
const advertiseMeetDays = [1, 2, 3]
// console.log("The current day is: " + currentDay);
// console.log("Is today and advertise for greet day?: " + advertiseMeetDays.includes(currentDay));

if (advertiseMeetDays.includes(currentDay)) {
    display.classList.add("banneron");
    display.classList.remove("banneroff");

};

const membersList = document.querySelector("#memberslist");
const membersjson = 'data/members.json';
// const advertiseList = document.querySelector("#adspots");
const adSpots = document.querySelector("#adspots");
const vipMembers = ["Premium", "Silver"];

async function apiFetch() {
    try {
        const response = await fetch(membersjson);
        if (response.ok) {
            const memberData = await response.json();
            // console.log("json file comes next.");
            // console.log(memberData);
            showMembers(memberData);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

var vipIndex = [];

function showMembers(memberData) {
    for (let i in memberData) {
        // Need to populate membership level for the if (vipMembers....)

        // console.log("membershipLevel = " + memberData[i].membershiplevel);
        if (vipMembers.includes(memberData[i].membershiplevel)) {
            vipIndex.push(i);
            // console.log("memberData Index = " + i);
        };
    };
    var randIndex = vipIndex[Math.floor(Math.random() * vipIndex.length)];
    // console.log("randIndex = " + randIndex);
    let memberCard = document.createElement('section');
    let companyName = document.createElement('h3');
    let street = document.createElement('h3');
    let phone = document.createElement('h3');
    let website = document.createElement('a');
    let companyImage = document.createElement('img');
    let membershipLevel = document.createElement("h3")
    let missionStatement = document.createElement("h3");
    companyName.textContent = memberData[randIndex].company;
    street.textContent = memberData[randIndex].street;
    phone.textContent = memberData[randIndex].phone;
    website.setAttribute('href', memberData[randIndex].website);
    website.innerHTML = memberData[randIndex].company;
    companyImage.setAttribute('src', memberData[randIndex].companyimage);
    companyImage.setAttribute('alt', memberData[randIndex].company);
    // companyImage.setAttribute('width', '240');
    // companyImage.setAttribute('height', '240');
    membershipLevel.textContent = memberData[randIndex].membershiplevel;
    missionStatement.textContent = memberData[randIndex].missionstatement;
    memberCard.appendChild(companyName);
    memberCard.appendChild(street);
    memberCard.appendChild(phone);
    memberCard.appendChild(membershipLevel);
    memberCard.appendChild(website);
    memberCard.appendChild(missionStatement);
    
    memberCard.appendChild(companyImage);

    adSpots.appendChild(memberCard);

};

