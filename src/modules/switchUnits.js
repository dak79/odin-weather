import { displayForecast, displayWeatherData } from './displayData.js'
import { errorHandler } from './errorHandler.js'
import { updateWeather, updateForecast, unit } from './weather.js'
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

async function updateData(newData) {
    const safeUpdateWeather = errorHandler(updateWeather)
    const weather = await safeUpdateWeather(
        newData.lat,
        newData.lon,
        newData.unit
    )
    console.log(weather)
    displayWeatherData(weather)
    const safeUpdateForecast = errorHandler(updateForecast)
    const forecast = await safeUpdateForecast(
        newData.lat,
        newData.lon,
        newData.unit
    )
    console.log(forecast)
    displayForecast(forecast)
}
