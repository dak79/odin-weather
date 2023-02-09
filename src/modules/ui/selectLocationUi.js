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
        name: 'locations',
        id: 'select-location'
    })
    locations.map(async (location, index) => {
        console.log(units)
        const li = document.createElement('li')
        li.setAttribute('data-index', index)
        const safeWeatherIcon = errorHandler(weatherIcon)
        const iconSrc = await safeWeatherIcon(`${location.weather[0].icon}`)
        li.innerHTML = `<span>${location.name}(${location.sys.country})</span> 
                        <img src='${iconSrc}' alt='icon:${
            location.weather[0].main
        }' />
                        <span>${location.weather[0].main}</span> - 
                        <span>max: ${Math.round(
                            location.main.temp_max
                        )} \u00B0${units === 'metric' ? 'C' : 'F'}</span> 
                        <span>min: ${Math.round(location.main.temp_min)}\u00B0${
            units === 'metric' ? 'C' : 'F'
        }</span>`

        ul.appendChild(li)
        li.addEventListener('click', (event) =>
            chooseLocation(event, locations, units)
        )
    })

    container.appendChild(ul)
}
