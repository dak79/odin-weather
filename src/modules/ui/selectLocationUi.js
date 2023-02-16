import { errorHandler } from '../errorHandler.js'
import { setAttributes } from '../helpers.js'
import { chooseLocation } from '../selectLocation.js'
import { weatherIcon } from '../weather.js'

/**
 * Create a list of availble location with search results
 * @param {Node} container
 * @param {Array} locations
 */
export function selectLocation(container, locations, units) {
    const previousSearch = document.querySelector(
        '#searchLocation + #select-location'
    )
    if (previousSearch) {
        previousSearch.remove()
    }

    const ul = document.createElement('ul')
    setAttributes(ul, {
        class: 'locations',
        id: 'select-location'
    })
    locations.map(async (location, index) => {
        const li = document.createElement('li')
        li.setAttribute('data-index', index)
        const safeWeatherIcon = errorHandler(weatherIcon)
        const iconSrc = await safeWeatherIcon(`${location.weather[0].icon}`)
        li.innerHTML = `<span>${location.name}(${location.sys.country})</span> 
                        <img src='${iconSrc}' alt='icon:${
            location.weather[0].main
        }' />
                        <span>${
                            location.weather[0].main
                        }</span>                                  
                        <span>${Math.round(location.main.temp)} \u00B0${
            units === 'metric' ? 'C' : 'F'
        }</span>`

        ul.appendChild(li)
        li.addEventListener('click', (event) =>
            chooseLocation(event, locations, units)
        )
    })

    container.appendChild(ul)
}
