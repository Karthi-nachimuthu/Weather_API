async function fetchWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "YOUR_API_KEY"; // Replace with actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    console.log("Fetching URL:", apiUrl); // Debugging

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("API Response:", data); // Debugging

        if (data.cod === "404") {
            alert("City not found. Please check the spelling.");
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
function displayWeather(data) {
    const weatherContainer = document.getElementById("weather");

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
