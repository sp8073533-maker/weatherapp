import { getFetchData } from './api.js';
import { getweatherIcon, getCurrentDate } from './utils.js';
import { elements, showSection } from './ui.js';
import { updateForecast } from './forecast.js';

// Search click
elements.searchBtn.addEventListener('click', handleSearch);

// Enter key
elements.cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
    const city = elements.cityInput.value.trim();
    if (!city) return;

    updateWeather(city);
    elements.cityInput.value = '';
}

// Main weather update
async function updateWeather(city) {
    const data = await getFetchData('weather', city);

    if (data.cod != 200) {
        showSection(elements.notFoundSection);
        return;
    }

    const { name, main, weather, wind } = data;

    elements.countryTxt.textContent = name;
    elements.tempTxt.textContent = Math.round(main.temp) + '°C';
    elements.conditionTxt.textContent = weather[0].main;
    elements.humidityValueTxt.textContent = main.humidity + '%';
    elements.windValueTxt.textContent = wind.speed + ' m/s';
    elements.currentDateTxt.textContent = getCurrentDate();

    elements.weatherSummaryImg.src = `asset/${getweatherIcon(weather[0].id)}`;

    await updateForecast(city);

    showSection(elements.weatherInfoSection);
}