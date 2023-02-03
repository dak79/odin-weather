import { setAttributes } from '../helpers.js'
import { chooseLocation } from '../selectLocation.js'

/**
 * Create a list of availble location with search results
 * @param {Node} container
 * @param {Array} locations
 */
export function selectLocation(container, locations) {
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

    locations.map((location, index) => {
        const li = document.createElement('li')
        li.setAttribute('data-index', index)
        li.textContent = `${location.name}(${location.sys.country}) ${location.weather[0].icon} ${location.weather[0].main} - max: ${location.main.temp_max} min: ${location.main.temp_min} `
        ul.appendChild(li)
        li.addEventListener('click', (event) =>
            chooseLocation(event, locations)
        )
    })

    container.appendChild(ul)
}
