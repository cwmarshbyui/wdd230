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
const advertiseList = document.querySelector("#adspots");
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

function showMembers(memberData) {
    for (let i in memberData) {
        let memberCard = document.createElement('section');
        let companyName = document.createElement('h3');
        let street = document.createElement('h3');
        let phone = document.createElement('h3');
        let website = document.createElement('a');
        let companyImage = document.createElement('img');
        let membershipLevel = document.createElement("h3")
        let missionStatement = document.createElement("h3");
        companyName.textContent = memberData[i].company;
        street.textContent = memberData[i].street;
        phone.textContent = memberData[i].phone;
        website.setAttribute('href', memberData[i].website);
        website.innerHTML = memberData[i].company;
        companyImage.setAttribute('src', memberData[i].companyimage);
        companyImage.setAttribute('alt', memberData[i].company);
        // companyImage.setAttribute('width', '240');
        // companyImage.setAttribute('height', '240');
        membershipLevel.textContent = memberData[i].membershiplevel;
        missionStatement.textContent = memberData[i].missionstatement;
        memberCard.appendChild(companyName);
        memberCard.appendChild(street);
        memberCard.appendChild(phone);
        // memberCard.appendChild(membershipLevel);
        memberCard.appendChild(missionStatement);
        // memberCard.appendChild(companyImage);
        memberCard.appendChild(website);

        // membersList.appendChild(memberCard);

        console.log("The level is : " + membershipLevel.textContent);
        if (vipMembers.includes(membershipLevel.textContent)) {

            advertiseList.appendChild(memberCard);

        };


    };
};

