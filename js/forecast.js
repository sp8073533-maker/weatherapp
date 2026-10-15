import { getFetchData } from './api.js';
import { getweatherIcon } from './utils.js';
import { elements } from './ui.js';

export async function updateForecast(city) {
    const data = await getFetchData('forecast', city);
    if (!data || data.cod !== '200' || !Array.isArray(data.list)) {
        console.warn('Forecast data not available', data);
        return;
    }
    const time = '12:00:00';

    elements.forecastContainer.innerHTML = '';

    data.list.forEach(item => {
        if (item.dt_txt.includes(time)) {
            const date = new Date(item.dt_txt).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short'
            });

            const html = `
            <div class="forecast-item">
                <h5>${date}</h5>
                <img src="asset/${getweatherIcon(item.weather[0].id)}" alt="Forecast icon" class="forecast-item-img">
                <h5>${Math.round(item.main.temp)}°C</h5>
            </div>`;

            elements.forecastContainer.insertAdjacentHTML('beforeend', html);
        }
    });
}