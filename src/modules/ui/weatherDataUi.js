import { appendChildren } from '../helpers.js'

export function displayWeather(hook) {
    const titleContainer = document.createElement('div')
    titleContainer.id = 'title-container'

    const city = document.createElement('h1')
    city.id = 'city-name'

    const iconTemp = document.createElement('div')
    iconTemp.id = 'icon-temp'

    const icon = document.createElement('img')
    icon.id = 'weather-icon'

    const temp = document.createElement('span')
    temp.id = 'weather-temp'

    appendChildren(iconTemp, [icon, temp])

    appendChildren(titleContainer, [city, iconTemp])

    const descriptionContainer = document.createElement('div')
    descriptionContainer.id = 'description-container'

    const shortDesc = document.createElement('p')
    shortDesc.id = 'short-description'

    const longDesc = document.createElement('p')
    longDesc.id = 'long-description'

    const wrapperData = document.createElement('div')
    wrapperData.id = 'wrapper-data'

    const tempContainer = document.createElement('div')
    tempContainer.id = 'temp-container'

    const maxTemp = document.createElement('p')
    maxTemp.id = 'max-temp'

    const minTemp = document.createElement('p')
    minTemp.id = 'min-temp'

    appendChildren(tempContainer, [maxTemp, minTemp])

    const huWiBaContainer = document.createElement('div')
    huWiBaContainer.id = 'hu-wi-ba-container'

    const humidity = document.createElement('p')
    humidity.id = 'humidity'

    const pressure = document.createElement('p')
    pressure.id = 'pressure'

    const windSpeed = document.createElement('p')
    windSpeed.id = 'wind-speed'

    appendChildren(huWiBaContainer, [humidity, pressure, windSpeed])
    appendChildren(wrapperData, [tempContainer, huWiBaContainer])
    appendChildren(descriptionContainer, [shortDesc, longDesc, wrapperData])
    appendChildren(hook, [titleContainer, descriptionContainer])
}
