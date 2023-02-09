import { errorHandler } from './errorHandler.js'
import { getFiveDaysForecast, unit } from './weather.js'
import { displayWeatherData, displayForecast } from './displayData.js'

/**
 * Choose Location between search results
 * @param {Event} event
 * @param {Array} locations
 * @param {'metric'|'imperial'} units
 */
export async function chooseLocation(event, locations, units) {
    const id = event.target.dataset.index
    const location = locations.at(parseInt(id))

    unit.lat = location.coord.lat
    unit.lon = location.coord.lon
    displayWeatherData(location)

    const safeGetFiveDaysForecast = errorHandler(getFiveDaysForecast)
    const forecast = await safeGetFiveDaysForecast(location, units)
    displayForecast(forecast)

    const ul = document.querySelector('#select-location')
    ul.remove()

    return location
}
