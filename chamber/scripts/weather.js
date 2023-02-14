// select HTML elements in the document
const currentTemp = document.querySelector('#chamber-current-temp');
const weatherIcon = document.querySelector('#chamber-weather-icon');
const captionDesc = document.querySelector('#chamber-weather-figure');
const weatherForecast = document.querySelector('#chamber-forecast');

// const url = 'https://api.openweathermap.org/data/2.5/weather';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Buckeye&appid=07d271ffbafb4a7722ddc51b2fb2fa27&units=imperial';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Buckeye&appid=07d271ffbafb4a7722ddc51b2fb2fa27&units=imperial';
// console.log(url2);


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    try {
        const response2 = await fetch(url2);
        if (response2.ok) {
            const data2 = await response2.json();
            // console.log(data2); // testing only
            displayResults2(data2); // uncomment when ready
        } else {
            throw Error2(await response2.text());
        }
    } catch (error2) {
        console.log(error2);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
function displayResults2(data2) {
    var dateOnly = "0";
    var dateOnly2 = "0";
    var noDays = 0;
    var forecast = "";
    for (let i in data2.list) {
        let dateOnly = data2.list[i].dt_txt.substring(0, 10);
        if (dateOnly != dateOnly2) {
            if (noDays != 0) {
                dateOnly2 = data2.list[i].dt_txt.substring(0, 10);
                // console.log(dateOnly.substr(5, 5) + "=" + Math.round(data2.list[i].main.temp));
                forecast = forecast + dateOnly.substr(5, 5) + "=" + `${Math.round(data2.list[i].main.temp)}&deg;F` + " ";
                if (noDays === 3) { break; }
            }
            noDays++;
        };

    };
    weatherForecast.innerHTML = "3 day forecast " + forecast;

}

