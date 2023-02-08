import { errorHandler } from './errorHandler.js'

export const unit = { lat: 0, lon: 0, unit: 'metric' }

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
        /* eslint-disable */
        const {
            base,
            clouds,
            cod,
            dt,
            id,
            timezone,
            visibility,
            ...cityWeather
        } = data
        /* eslint-enable */

        locationsWeather.push(cityWeather)
    })

    return locationsWeather
}

/**
 * Get the icon for the weather
 * @param {String} code
 * @returns {String} icon URL
 */
export async function weatherIcon(code) {
    const response = await fetch(`http://openweathermap.org/img/wn/${code}.png`)
    const icon = await response.blob()
    const iconURL = URL.createObjectURL(icon)
    return iconURL
}

export async function getFiveDaysForecast(location, units) {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${location.coord.lat}&lon=${location.coord.lon}&appid=de1ef2a4611bd0429a6286b361ac72cf&units=${units}`
    )
    const forecast = await response.json()

    return forecast
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
async function getCoord(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=de1ef2a4611bd0429a6286b361ac72cf`
    )
    const cityObj = await response.json()

    return cityObj
}

export async function getCity(lat, lon) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=de1ef2a4611bd0429a6286b361ac72cf`
    )
    const city = await response.json()

    return city
}
