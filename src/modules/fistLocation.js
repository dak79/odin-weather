import { errorHandler } from './errorHandler.js'
import { getCity, getFiveDaysForecast, weatherData } from './weather.js'
import { displayWeatherData, displayForecast } from './displayData.js'

export async function firstLocation() {
    const permission = await navigator.permissions.query({
        name: 'geolocation'
    })

    if (permission.state === 'granted') {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                getFirstPageWeather(
                    position.coords.latitude,
                    position.coords.longitude
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
        getFirstPageWeather(44.4938203, 11.3426327)
    }
}

async function getFirstPageWeather(lat, lon) {
    const safeGetCity = errorHandler(getCity)
    const city = await safeGetCity(lat, lon)
    const safeWeatherData = errorHandler(weatherData)
    const data = await safeWeatherData(city[0].name, 'metric')
    displayWeatherData(data[0])

    const safeGetFiveDaysForecast = errorHandler(getFiveDaysForecast)
    const forecast = await safeGetFiveDaysForecast(data[0])
    displayForecast(forecast)
}
