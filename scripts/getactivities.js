// select HTML elements in the document
const activitesReference = document.querySelector('#activitiesref');

const activitiesJson = 'activities.json';


async function apiFetch() {
    try {
        const response = await fetch(activitiesJson);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            populateActivitesReferences(data, 0); // uncomment when ready
            populateActivitesReferences(data, 1); // uncomment when ready
            populateActivitesReferences(data, 2); // uncomment when ready
            populateActivitesReferences(data, 3); // uncomment when ready
            populateActivitesReferences(data, 4); // uncomment when ready
            populateActivitesReferences(data, 5); // uncomment when ready
            populateActivitesReferences(data, 6); // uncomment when ready
            populateActivitesReferences(data, 7); // uncomment when ready
            populateActivitesReferences(data, 8); // uncomment when ready
            populateActivitesReferences(data, 9); // uncomment when ready
            populateActivitesReferences(data, 10); // uncomment when ready
            populateActivitesReferences(data, 11); // uncomment when ready
            populateActivitesReferences(data, 12); // uncomment when ready
            populateActivitesReferences(data, 13); // uncomment when ready
            populateActivitesReferences(data, 14); // uncomment when ready
            populateActivitesReferences(data, 15); // uncomment when ready
            populateActivitesReferences(data, 16); // uncomment when ready

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function populateActivitesReferences(data, row) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    const activitiesRef = document.getElementById("activitiesref");

    a.setAttribute('href', data.activities[row][0]);
    a.innerHTML = data.activities[row][1];
    li.append(a);
    activitiesRef.appendChild(li);

}

