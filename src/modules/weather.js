import { errorHandler } from './errorHandler.js'

export function weatherData(data) {
    return data
}

/**
 * @param {'standard'|'metric'|'imperial'}  units.
 * @returns {Object} - All weather data for that location.
 */
export async function getWeather(units) {
    const safeGetCoord = errorHandler(getCoord)
    const city = await safeGetCoord('london')

    console.log(city)

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=de1ef2a4611bd0429a6286b361ac72cf&units=${units}`
    )

    const weather = await response.json()

    console.log(weather)
    return weather
}

/**
 * @param {String} location - City name.
 * @returns {Object} - Geo data for that location. 
 */
async function getCoord(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=de1ef2a4611bd0429a6286b361ac72cf`
    )
    const cityObj = await response.json()

    return cityObj
}
