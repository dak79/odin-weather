import { errorHandler } from './errorHandler.js'
import { weatherIcon } from './weather.js'

/**
 * Populate page with weather data
 * @param {Object} location
 */
export async function weatherData(location) {
    console.log(location)
    const city = document.querySelector('#city-name')
    city.textContent = `${location.name} (${location.sys.country})`

    const safeWeatherIcon = errorHandler(weatherIcon)
    const iconSrc = await safeWeatherIcon(location.weather[0].icon)
    const img = document.querySelector('#weather-icon')
    img.src = iconSrc

    const temperature = document.querySelector('#weather-temp')
    temperature.textContent = `${Math.round(location.main.temp)} \u00B0C`

    const mainWeatherText = document.querySelector('#short-description')
    mainWeatherText.textContent = `${location.weather[0].main}`

    const description = document.querySelector('#long-description')
    const locationDescription = `${location.weather[0].description}`
    const capitalizeDescription =
        locationDescription.charAt(0).toUpperCase() +
        locationDescription.slice(1)
    description.textContent = `${capitalizeDescription}. Temperature feels like ${Math.round(
        location.main.feels_like
    )} \u00B0C`

    const maxTemp = document.querySelector('#max-temp')
    maxTemp.textContent = `Max: ${Math.round(location.main.temp_max)} \u00B0C`

    const minTemp = document.querySelector('#min-temp')
    minTemp.textContent = `Min: ${Math.round(location.main.temp_min)} \u00B0C`

    const humidity = document.querySelector('#humidity')
    humidity.textContent = `Humidity: ${location.main.humidity}%`

    const pressure = document.querySelector('#pressure')
    pressure.textContent = `Pressure: ${location.main.pressure} Bar`

    const windSpeed = document.querySelector('#wind-speed')
    windSpeed.textContent = `Wind Speed: ${location.wind.speed} Km/h`
}
