import { getFiveDaysForecast } from './weather.js'
import { weatherData } from './weatherData.js'

/**
 * Choose Location between search results
 * @param {Event} event
 * @param {Array} locations
 */
export function chooseLocation(event, locations) {
    const id = event.target.dataset.index
    const location = locations.at(parseInt(id))
    weatherData(location)
  getFiveDaysForecast(location)

    const ul = document.querySelector('#select-location')
    ul.remove()

    return location
}
