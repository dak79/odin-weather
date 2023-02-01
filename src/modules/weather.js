import { errorHandler } from './errorHandler.js'

/**
 *  Select from OpenWeather API response only usefull weather data.
 * @returns {Object} data - Data usefull for web app
 */
export async function weatherData() {
    const safeGetWeather = errorHandler(getWeather)
    const allData = await safeGetWeather('metric')

    //eslint-disable-next-line
    const { base, clouds, coord, cod, dt, id, timezone, visibility, ...data } =
        allData

    console.log(data)
    return data
}

/**
 * Query OpenWether API for all data available about a location.
 * @param {'standard'|'metric'|'imperial'}  units.
 * @returns {Object} - All weather data for that location.
 */
async function getWeather(units) {
    const safeGetCoord = errorHandler(getCoord)
    const city = await safeGetCoord('london')

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=de1ef2a4611bd0429a6286b361ac72cf&units=${units}`
    )

    const weather = await response.json()
    return weather
}

/**
 * Query geolocation API for getting the coordinate for OpenWeather API request.
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
