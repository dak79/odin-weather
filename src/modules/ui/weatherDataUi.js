import { appendChildren, setAttributes } from '../helpers.js'

/**
 * Render weather information on page
 * @param {Node} hook
 */
export function renderWeather(hook) {
    const titleContainer = document.createElement('div')
    titleContainer.id = 'title-container'

    const city = document.createElement('h1')
    setAttributes(city, {
        id: 'city-name',
        class: 'city-name'
    })

    const iconTemp = document.createElement('div')
    setAttributes(iconTemp, {
        id: 'icon-temp',
        class: 'icon-temp'
    })

    const temp = document.createElement('span')
    setAttributes(temp, {
        id: 'weather-temp',
        class: 'main-weather-data-text'
    })

    const icon = document.createElement('img')
    icon.id = 'weather-icon'

    const shortDesc = document.createElement('span')
    setAttributes(shortDesc, {
        id: 'short-description',
        class: 'main-weather-data-text'
    })

    appendChildren(iconTemp, [temp, icon, shortDesc])
    appendChildren(titleContainer, [city, iconTemp])

    const dataContainer = document.createElement('div')
    dataContainer.id = 'data-container'

    const longDesc = document.createElement('p')
    longDesc.id = 'long-description'

    const maxTemp = document.createElement('p')
    maxTemp.id = 'max-temp'

    const minTemp = document.createElement('p')
    minTemp.id = 'min-temp'

    const humidity = document.createElement('p')
    humidity.id = 'humidity'

    const pressure = document.createElement('p')
    pressure.id = 'pressure'

    const windSpeed = document.createElement('p')
    windSpeed.id = 'wind-speed'

    appendChildren(dataContainer, [
        longDesc,
        maxTemp,
        minTemp,
        humidity,
        pressure,
        windSpeed
    ])
    appendChildren(hook, [titleContainer, dataContainer])
}
