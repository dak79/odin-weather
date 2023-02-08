import { errorHandler } from './errorHandler.js'
import { weatherIcon } from './weather.js'
import { appendChildren } from './helpers.js'

/**
 * Populate page with weather data
 * @param {Object} location
 */
export async function displayWeatherData(location) {
    const city = document.querySelector('#city-name')
    city.textContent = `${location.name} (${location.sys.country})`

    const safeWeatherIcon = errorHandler(weatherIcon)
    const iconSrc = await safeWeatherIcon(location.weather[0].icon)
    const img = document.querySelector('#weather-icon')
    img.src = iconSrc

    const temperature = document.querySelector('#weather-temp')
    temperature.textContent = `${Math.round(location.main.temp)} \u00B0C`

    const mainWeatherText = document.querySelector('#short-description')
    mainWeatherText.textContent = `${location.weather[0].main}`

    const description = document.querySelector('#long-description')
    const locationDescription = `${location.weather[0].description}`
    const capitalizeDescription =
        locationDescription.charAt(0).toUpperCase() +
        locationDescription.slice(1)
    description.textContent = `${capitalizeDescription}. Temperature feels like ${Math.round(
        location.main.feels_like
    )} \u00B0C`

    const maxTemp = document.querySelector('#max-temp')
    maxTemp.textContent = `Max: ${Math.round(location.main.temp_max)} \u00B0C`

    const minTemp = document.querySelector('#min-temp')
    minTemp.textContent = `Min: ${Math.round(location.main.temp_min)} \u00B0C`

    const humidity = document.querySelector('#humidity')
    humidity.textContent = `Humidity: ${location.main.humidity}%`

    const pressure = document.querySelector('#pressure')
    pressure.textContent = `Pressure: ${location.main.pressure} Bar`

    const windSpeed = document.querySelector('#wind-speed')
    windSpeed.textContent = `Wind Speed: ${location.wind.speed} Km/h`
}

export function displayForecast(data) {
    let d1 = new Date()
    const hook = document.querySelector('#forecast')
    data.list.map(async day => {
        let d2 = new Date(day.dt * 1000)

        if (d1.getDay() === d2.getDay()) {
            if (!document.querySelector(`#day-${d2.getDay()}`)) {
                const dayWrapper = document.createElement('div')
                dayWrapper.id = `day-${d1.getDay()}`
                hook.appendChild(dayWrapper)
            }

            const wrapper = document.querySelector(`#day-${d2.getDay()}`)
            if (!document.querySelector(`#d-${d2.getDay()}`)) {
                const dayName = document.createElement('p')
                dayName.id = `d-${d2.getDay()}`
                dayName.textContent = `${convertDayNumber(d2.getDay())}`
                wrapper.appendChild(dayName)
            }
            if (!document.querySelector(`#hours-${d2.getDay()}`)) {
                const hourlyWeather = document.createElement('div')
                hourlyWeather.id = `hours-${d2.getDay()}`
                wrapper.appendChild(hourlyWeather)
            }

            const hours = document.querySelector(`#hours-${d2.getDay()}`)

            const forecastHours = document.createElement('div')
            forecastHours.id = `forecast-${d2.getDay()}-${d2.getHours()}`
            hours.appendChild(forecastHours)

            const hour = document.createElement('span')
            hour.id = `hour-${d2.getDay()}-${d2.getHours()}`
            hour.textContent = `${d2.getHours()}:00 `

            const temp = document.createElement('span')
            temp.id = `temp-${d2.getDay()}-${d2.getHours()}`
            temp.textContent = `${Math.round(
                day.main.temp_max
            )} \u00B0C / ${Math.round(day.main.temp_min)} \u00B0C`

            const safeWeatherIcon = errorHandler(weatherIcon)
            const iconSrc = await safeWeatherIcon(day.weather[0].icon)
            const icon = document.createElement('img')
            icon.src = iconSrc

            const desc = document.createElement('span')
            desc.id = `desc-${d2.getDay()}-${d2.getHours()}`
            desc.textContent = `${day.weather[0].main}`

            appendChildren(forecastHours, [hour, temp, icon, desc])
        } else {
            d1 = d2
        }
    })
}

function convertDayNumber(n) {
    let day = ''
    switch (n) {
        case 0:
            day = 'Sunday'
            break
        case 1:
            day = 'Monday'
            break
        case 2:
            day = 'Tuesday'
            break
        case 3:
            day = 'Wednesday'
            break
        case 4:
            day = 'Thursday'
            break
        case 5:
            day = 'Friday'
            break
        case 6:
            day = 'Saturday'
            break
    }
    return day
}
