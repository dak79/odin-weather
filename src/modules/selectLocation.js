import { errorHandler } from './errorHandler.js'
import { getFiveDaysForecast } from './weather.js'
import { displayWeatherData, displayForecast } from './displayData.js'

/**
 * Choose Location between search results
 * @param {Event} event
 * @param {Array} locations
 */
export async function chooseLocation(event, locations) {
    const id = event.target.dataset.index
    const location = locations.at(parseInt(id))
    displayWeatherData(location)
    
  const safeGetFiveDaysForecast = errorHandler(getFiveDaysForecast)
    const forecast = await safeGetFiveDaysForecast(location)
    displayForecast(forecast)

    const ul = document.querySelector('#select-location')
    ul.remove()

    return location
}
