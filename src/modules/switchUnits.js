import { displayForecast, displayWeatherData } from './displayData.js'
import { errorHandler } from './errorHandler.js'
import { updateWeather, updateForecast, unit } from './weather.js'

/**
 * Change from metric to imperial
 */
export function toggleUnits() {
    console.log('Changed')
    const box = document.querySelector('#switch-input')

    console.log(
        `box: ${box} - box value: ${box.value} - box checked: ${box.checked}`
    )
    if (box.checked) {
        unit.unit = 'imperial'
        updateData(unit)
    } else {
        unit.unit = 'metric'
        updateData(unit)
    }
}

/**
 * Update data after changing units
 * @param {Object} newData
 * @property {Number} newData.lat - latitude
 * @property {Number} newData.lon - longitude
 * @property {'metric'|'imperial'} newData.unit
 */
async function updateData(newData) {
    const safeUpdateWeather = errorHandler(updateWeather)
    const weather = await safeUpdateWeather(
        newData.lat,
        newData.lon,
        newData.unit
    )
    displayWeatherData(weather)

    const safeUpdateForecast = errorHandler(updateForecast)
    const forecast = await safeUpdateForecast(
        newData.lat,
        newData.lon,
        newData.unit
    )
    displayForecast(forecast)
}
