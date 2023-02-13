import { weatherData, unit } from './weather.js'
import { selectLocation } from './ui/selectLocationUi.js'

/**
 * Search weather for input locations
 * @returns {Promise} data - Locations matchinng with search
 */
export async function searchWeather() {
    const input = document.querySelector('#searchLocation')
    const container = document.querySelector('#search-container')
    if (input.value) {
        const data = await weatherData(input.value, unit.unit)
        selectLocation(container, data, unit.unit)
        return data
    }
}
