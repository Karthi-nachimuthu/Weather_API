function fetchWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.current_weather;
            document.getElementById("location").innerText = `Location: Latitude ${latitude}, Longitude ${longitude}`;
            document.getElementById("temperature").innerText = `Temperature: ${weather.temperature}°C`;
            document.getElementById("weather-condition").innerText = `Condition: ${weather.weathercode}`;
        })
        .catch(error => console.error("Error fetching weather:", error));
}

// Get user's geolocation
navigator.geolocation.getCurrentPosition(
    (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeather(latitude, longitude);
    },
    (error) => {
        console.error("Geolocation error:", error);
        document.getElementById("location").innerText = "Could not fetch location.";
        // Default location (e.g., New York)
        fetchWeather(40.7128, -74.0060);
    }
);