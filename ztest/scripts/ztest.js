
const arrayTest = document.querySelector('#arraytest');
const arrayTesTheWeek = document.querySelector('#arraytesttheweek');
const url = '../activities3.json';

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
    arrayTesTheWeek.innerHTML = data[1].length;
    alert(data[0].length);

}
