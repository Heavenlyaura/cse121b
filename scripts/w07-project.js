const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';
let conditions;

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'.

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

async function fetchWeatherData(latitude, longitude) {
    try {
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        conditions = data.current.weather[0].main.toLowerCase();
        showWeatherData(data);
        changeBackground(conditions);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}



async function displayResults(location) {
    if (location) {
        // Search by location
        const geoApiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;;
        const geoResponse = await fetch(geoApiUrl);
        const geoData = await geoResponse.json();
        console.log(geoData)

        if (geoData) {
            const latitude = geoData.coord.lat;
            console.log(latitude)
            const longitude = geoData.coord.lon;
            fetchWeatherData(latitude, longitude);
        } else {
            alert('Location Not Found!')
        }
    } else {
        // Display default results based on user's current location
        navigator.geolocation.getCurrentPosition((success) => {
            const { latitude, longitude } = success.coords;
            fetchWeatherData(latitude, longitude);
        });
    }
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>

    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}

function changeBackground(weatherCondition) {
    const body = document.body;
    switch (weatherCondition) {
        case 'clear':
            body.style.backgroundImage = 'url("clear-sky.jpg")';
            break;
        case 'rain':
            body.style.backgroundImage = 'url("/images/raining.jpg")';
            break;
        case 'dust':
            body.style.backgroundImage = 'url("/images/dust.jpg")';
            break;
        case 'smoke':
            body.style.backgroundImage = 'url("/images/smoke.jpg")';
            break;
        case 'clouds':
            body.style.backgroundImage = 'url("/images/clouds.jpg")';
            break;
        case 'snow':
            body.style.backgroundImage = 'url("/images/snow.jpg")';
            break;
        case 'mist':
            body.style.backgroundImage = 'url("/images/mist.jpg")';
            break;
        case 'thunderstorm':
            body.style.backgroundImage = 'url("/images/thunderstorm.jpg")';
            break;

        // Add more cases for other weather conditions.
        default:
            body.style.backgroundImage = 'url("/images/cover.jpg")';
            break;
    }
}

async function fetchWeatherDataByLocation(location) {
    try {
        const geoApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${API_KEY}`;
        const geoResponse = await fetch(geoApiUrl);
        const geoData = await geoResponse.json();

        if (geoData.results.length > 0) {
            const latitude = geoData.results[0].geometry.lat;
            const longitude = geoData.results[0].geometry.lng;

            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
            const weatherResponse = await fetch(weatherApiUrl);
            const weatherData = await weatherResponse.json();

            // Update the UI with the new weather data
            showWeatherData(weatherData);
            changeBackground(weatherData.current.weather[0].main.toLowerCase());
        } else {
            alert("Location not found!")
        }
    } catch (error) {
        alert(error)
    }
}

 

document.getElementById('button').addEventListener('click', function () {
    const locationInput = document.getElementById('text-input').value;
    displayResults(locationInput);
    changeBackground('')
});

// Display default or searched results on page load
displayResults();