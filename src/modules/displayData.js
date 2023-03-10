import { errorHandler } from './errorHandler.js'
import { weatherIcon, unit } from './weather.js'
import { appendChildren, setAttributes } from './helpers.js'
import ash from '../assets/imgs/background/ash.jpg'
import clear from '../assets/imgs/background/clear.jpg'
import clouds from '../assets/imgs/background/clouds.jpg'
import drizzle from '../assets/imgs/background/drizzle.jpg'
import dust from '../assets/imgs/background/dust.jpg'
import fog from '../assets/imgs/background/fog.jpg'
import general from '../assets/imgs/background/general.jpg'
import haze from '../assets/imgs/background/haze.jpg'
import mist from '../assets/imgs/background/mist.jpg'
import rain from '../assets/imgs/background/rain.jpg'
import sand from '../assets/imgs/background/sand.jpg'
import smoke from '../assets/imgs/background/smoke.jpg'
import snow from '../assets/imgs/background/snow.jpg'
import squall from '../assets/imgs/background/squall.jpg'
import thunderstorm from '../assets/imgs/background/thunderstorm.jpg'
import tornado from '../assets/imgs/background/tornado.jpg'

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
    temperature.textContent = `${Math.round(location.main.temp)} \u00B0${
        unit.unit === 'metric' ? 'C' : 'F'
    }`

    const mainWeatherText = document.querySelector('#short-description')
    mainWeatherText.textContent = `${location.weather[0].main}`

    const description = document.querySelector('#long-description')
    const locationDescription = `${location.weather[0].description}`
    const capitalizeDescription =
        locationDescription.charAt(0).toUpperCase() +
        locationDescription.slice(1)
    description.textContent = `${capitalizeDescription}. Temperature feels like ${Math.round(
        location.main.feels_like
    )} \u00B0${unit.unit === 'metric' ? 'C' : 'F'}`

    const maxTemp = document.querySelector('#max-temp')
    maxTemp.textContent = `Max: ${Math.round(location.main.temp_max)} \u00B0${
        unit.unit === 'metric' ? 'C' : 'F'
    }`

    const minTemp = document.querySelector('#min-temp')
    minTemp.textContent = `Min: ${Math.round(location.main.temp_min)} \u00B0${
        unit.unit === 'metric' ? 'C' : 'F'
    }`

    const humidity = document.querySelector('#humidity')
    humidity.textContent = `Humidity: ${location.main.humidity}%`

    const pressure = document.querySelector('#pressure')
    pressure.textContent = `Pressure: ${location.main.pressure} Bar`

    const windSpeed = document.querySelector('#wind-speed')
    windSpeed.textContent = `Wind Speed: ${location.wind.speed} ${
        unit.unit === 'metric' ? 'm/s' : 'Mph'
    }`

    displayBackground(location.weather[0].main)
}

/**
 * Populate with forecast data
 * @param {Object} data
 *
 */
export function displayForecast(data) {
    let d1 = new Date()
    const hook = document.querySelector('#forecast')
    if (document.querySelector('#forecast > div')) {
        Array.from(hook.children).map((child) => child.remove())
    }

    data.list.map(async (day) => {
        let d2 = new Date(day.dt * 1000)

        if (d1.getDay() === d2.getDay()) {
            if (!document.querySelector(`#day-${d2.getDay()}`)) {
                const dayWrapper = document.createElement('div')
                dayWrapper.id = `day-${d1.getDay()}`
                setAttributes(dayWrapper, {
                    id: `day-${d1.getDay()}`,
                    class: 'days'
                })
                hook.appendChild(dayWrapper)
            }

            const wrapper = document.querySelector(`#day-${d2.getDay()}`)
            if (!document.querySelector(`#d-${d2.getDay()}`)) {
                const dayName = document.createElement('p')
                setAttributes(dayName, {
                    id: `d-${d2.getDay()}`,
                    class: 'day-name'
                })
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
            setAttributes(forecastHours, {
                id: `forecast-${d2.getDay()}-${d2.getHours()}`,
                class: 'forecast-hours'
            })
            hours.appendChild(forecastHours)

            const hour = document.createElement('span')
            setAttributes(hour, {
                id: `hour-${d2.getDay()}-${d2.getHours()}`,
                class: 'forecast-data'
            })
            hour.textContent = `${d2.getHours()}:00 `

            const temp = document.createElement('span')
            setAttributes(temp, {
                id: `temp-${d2.getDay()}-${d2.getHours()}`,
                class: 'forecast-data'
            })
            temp.textContent = `${Math.round(day.main.temp_max)} \u00B0${
                unit.unit === 'metric' ? 'C' : 'F'
            } / ${Math.round(day.main.temp_min)} \u00B0${
                unit.unit === 'metric' ? 'C' : 'F'
            }`

            const safeWeatherIcon = errorHandler(weatherIcon)
            const iconSrc = await safeWeatherIcon(day.weather[0].icon)
            const icon = document.createElement('img')
            setAttributes(icon, {
                src: iconSrc,
                alt: 'weather icon',
                class: 'forecast-data'
            })

            const desc = document.createElement('span')
            desc.id = `desc-${d2.getDay()}-${d2.getHours()}`
            setAttributes(desc, {
                id: `desc-${d2.getDay()}-${d2.getHours()}`,
                class: 'forecast-data'
            })
            desc.textContent = `${day.weather[0].main}`

            appendChildren(forecastHours, [hour, temp, icon, desc])
        } else {
            d1 = d2
        }
    })
}

/**
 * Convert day number in string
 * @param {Number} n
 */
function convertDayNumber(n) {
    let day = ''
    switch (n) {
        case 0:
            day = 'Sun'
            break
        case 1:
            day = 'Mon'
            break
        case 2:
            day = 'Tue'
            break
        case 3:
            day = 'Wed'
            break
        case 4:
            day = 'Thu'
            break
        case 5:
            day = 'Fri'
            break
        case 6:
            day = 'Sat'
            break
    }
    return day
}

/**
 * Display background images according to main weather conditions
 * @param {String} weather - fetched from weather[0].main
 */
function displayBackground(weather) {
    const imgUrls = {
        ash,
        clear,
        clouds,
        drizzle,
        dust,
        fog,
        general,
        haze,
        mist,
        rain,
        sand,
        smoke,
        snow,
        squall,
        thunderstorm,
        tornado
    }

    const body = document.querySelector('body')

    if (weather.toString().toLowerCase() in imgUrls) {
        body.style.backgroundImage = `url('${
            imgUrls[weather.toString().toLowerCase()]
        }')`
    } else {
        body.style.backgroundImage = `url('${imgUrls[general]}')`
    }
}
