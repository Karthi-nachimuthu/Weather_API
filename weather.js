const apiKey = '2e5437c4b5f53c0daaf088427516d505'; // Replace with your API key
async function fetchWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    if (data.cod !== 200) {
        weatherContainer.innerHTML = `<p>${data.message}</p>`;
        return;
    }
    weatherContainer.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
