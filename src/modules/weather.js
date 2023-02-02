import { errorHandler } from './errorHandler.js'

/**
 * Select from OpenWeather API response only useful weather data.
 * @param {String} location - city.
 * @param {'standard'|'metric'|'imperial'} units - units of mesurement.
 * @returns {Array}
 */
export async function weatherData(location, units) {
    const safeGetWeather = errorHandler(getWeather)
    const allData = await safeGetWeather(location, units)
    const locationsWeather = []
    allData.map((data) => {
        const {
            base,
            clouds,
            coord,
            cod,
            dt,
            id,
            timezone,
            visibility,
            ...cityWeather
        } = data
        locationsWeather.push(cityWeather)
    })

    return locationsWeather
}

/**
 * Query OpenWether API for all data available about a location.
 * @param {String} location - city.
 * @param {'standard'|'metric'|'imperial'} units - units of mesurement.
 * @returns {Array}
 */
async function getWeather(location, units) {
    const safeGetCoord = errorHandler(getCoord)
    const cities = await safeGetCoord(location)
    const locations = []
    for (const city of cities) {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=de1ef2a4611bd0429a6286b361ac72cf&units=${units}`
        )
        const weather = await response.json()
        locations.push(weather)
    }
    return locations
}

/**
 * Query geolocation API for getting the coordinate for OpenWeather API request.
 * @param {String} location - City name.
 * @returns {Object}
 */
export async function getCoord(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=de1ef2a4611bd0429a6286b361ac72cf`
    )
    const cityObj = await response.json()

    return cityObj
}
