const membersList = document.querySelector("#memberslist");
const membersjson = 'data/members.json';
const advertiseList = document.querySelector("#adspots");

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
        let companyName = document.createElement('h2');
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
        membershipLevel.textContent = "Level: " + memberData[i].membershiplevel;
        missionStatement.textContent = memberData[i].missionstatement;
        memberCard.appendChild(companyName);
        memberCard.appendChild(street);
        memberCard.appendChild(phone);
        memberCard.appendChild(membershipLevel);
        memberCard.appendChild(missionStatement);
        memberCard.appendChild(companyImage);
        memberCard.appendChild(website);

        membersList.appendChild(memberCard);

    }


    // Use buttons to see different views
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
        console.log("We are here in the console log");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }

}