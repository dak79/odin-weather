import { errorHandler } from './errorHandler.js'
import { getCity, getFiveDaysForecast, weatherData, unit } from './weather.js'
import { displayWeatherData, displayForecast } from './displayData.js'

/**
 * Get geolocation from Geolocation API or display Bologna if not available
 */
export async function firstLocation() {
    const permission = await navigator.permissions.query({
        name: 'geolocation'
    })

    if (permission.state === 'granted') {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                getFirstPageWeather(
                    position.coords.latitude,
                    position.coords.longitude,
                    unit.unit
                )
            },

            (err) => {
                throw new Error('Something wrong with coords', err)
            },
            {
                enableHighAccuracy: true
            }
        )
    } else {
        getFirstPageWeather(44.4938203, 11.3426327, unit.unit)
    }
}

/**
 * Display weather and forecast data after geolocation
 * @param {Number} lat - latitude
 * @param {Number} lon - longitude
 * @param {'metric'|'imperial'} units
 */
async function getFirstPageWeather(lat, lon, units) {
    unit.lat = lat
    unit.lon = lon
    const safeGetCity = errorHandler(getCity)
    const city = await safeGetCity(lat, lon)
    const safeWeatherData = errorHandler(weatherData)

    const data = await safeWeatherData(city[0].name, units)
    displayWeatherData(data[0])

    const safeGetFiveDaysForecast = errorHandler(getFiveDaysForecast)
    const forecast = await safeGetFiveDaysForecast(data[0], units)
    displayForecast(forecast)
}
