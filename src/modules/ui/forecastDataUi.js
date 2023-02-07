import { errorHandler } from '../errorHandler.js'
import { appendChildren } from '../helpers.js'
import { weatherIcon } from '../weather.js'

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
