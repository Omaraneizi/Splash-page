// OpenWeatherMap API Key (using the provided key)
const apiKey = 'b8a5a21f29537a8f7702dc7e9b05384a';  // Your actual API key
const city = 'Bolingbrook,IL';  // Set the city to Bolingbrook, Illinois

// Fetch current weather data from OpenWeatherMap
async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        // Display weather information
        if (data.cod === 200) {
            const temp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherInfo = `Current temperature in ${city}: ${temp}°C, ${weatherDescription}.`;
            document.getElementById('weather-info').textContent = weatherInfo;
        } else {
            document.getElementById('weather-info').textContent = 'Weather data not available.';
        }
    } catch (error) {
        document.getElementById('weather-info').textContent = 'Error fetching weather data.';
        console.error('Error fetching weather data:', error);
    }
}

// Call getWeather function when the page loads
window.onload = getWeather;

// Fade the title when scrolling down
window.onscroll = function() {
    const title = document.getElementById('page-title');
    const scrollPosition = window.scrollY;
    const opacity = Math.max(1 - scrollPosition / 300, 0);  // Fade out the title as you scroll
    title.style.opacity = opacity;
};
