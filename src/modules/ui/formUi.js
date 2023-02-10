import { appendChildren, setAttributes } from '../helpers.js'

/**
 * Render form
 * @param {Node} hook
 */
export function renderForm(hook) {
    const glass = document.createElement('div')
    glass.id = 'glass'
    const searchArea = document.createElement('div')
    setAttributes(searchArea, {
        id: 'search-area',
        class: 'search-area'
    })

    const container = document.createElement('div')
    container.setAttribute('id', 'search-container')

    const searchInput = document.createElement('input')
    setAttributes(searchInput, {
        id: 'searchLocation',
        type: 'text',
        name: 'searchLocation',
        placeholder: 'City',
        class: 'search-input'
    })

    const searchButton = document.createElement('button')
    setAttributes(searchButton, {
        id: 'btn-search',
        type: 'button',
        class: 'btn'
    })
    searchButton.textContent = 'Search'

    container.appendChild(searchInput)
    appendChildren(searchArea, [glass, container, searchButton])
    hook.appendChild(searchArea)
}
