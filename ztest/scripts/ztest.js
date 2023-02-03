
const arrayTest = document.querySelector('#arraytest');
const arrayTesTheWeek = document.querySelector('#arraytesttheweek');
const activitiesTest = document.querySelector('#activitiestest');
const url = 'activities3.json';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.length);

            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    arrayTest.innerHTML = data.length;
    arrayTesTheWeek.innerHTML = data[0].activities[0].href;
    for (i in data) {
        for (j in data[i].activities) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            const activitiesRef = document.getElementById("activitiestest");

            a.setAttribute('href', data[i].activities[j].href);
            a.innerHTML = data[i].activities[j].desc;
            li.append(a);
            activitiesRef.appendChild(li);
        }
    }
}


