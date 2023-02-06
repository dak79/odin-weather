import { errorHandler } from './errorHandler.js'
import { displayForecast } from './ui/forecastDataUi.js'
import { getFiveDaysForecast } from './weather.js'
import { weatherData } from './weatherData.js'

/**
 * Choose Location between search results
 * @param {Event} event
 * @param {Array} locations
 */
export async function chooseLocation(event, locations) {
    const id = event.target.dataset.index
    const location = locations.at(parseInt(id))
    weatherData(location)
    const safeGetFiveDaysForecast = errorHandler(getFiveDaysForecast)

    const forecast = await safeGetFiveDaysForecast(location)
    displayForecast(forecast)

    const ul = document.querySelector('#select-location')
    ul.remove()

    return location
}
