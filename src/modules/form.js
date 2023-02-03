import { weatherData } from './weather.js'
import { selectLocation } from './ui/selectLocationUi.js'

/**
 * @returns {Promise} data - Locations matchinng with search
 */
export async function searchWeather() {
    const input = document.querySelector('#searchLocation')
    const container = document.querySelector('#search-container')
    const data = await weatherData(input.value, 'metric')
    selectLocation(container, data)

    return data
}
