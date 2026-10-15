export const elements = {
    cityInput: document.querySelector('.city-input'),
    searchBtn: document.querySelector('.search-btn'),
    weatherInfoSection: document.querySelector('.weather-info'),
    notFoundSection: document.querySelector('.not-found'),
    searchCitySection: document.querySelector('.search-city'),

    countryTxt: document.querySelector('.country-txt'),
    tempTxt: document.querySelector('.temp-txt'),
    conditionTxt: document.querySelector('.condition-txt'),
    humidityValueTxt: document.querySelector('.humidity-value-txt'),
    windValueTxt: document.querySelector('.wind-value-txt'),
    weatherSummaryImg: document.querySelector('.weather-summary-img'),
    currentDateTxt: document.querySelector('.current-date-txt'),

    forecastContainer: document.querySelector('.forecast-item-container'),
};

export function showSection(section) {
    [elements.weatherInfoSection, elements.notFoundSection, elements.searchCitySection]
        .forEach(sec => sec.style.display = 'none');

    section.style.display = 'flex';
}