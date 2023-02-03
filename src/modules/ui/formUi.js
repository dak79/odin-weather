import { appendChildren, setAttributes } from '../helpers.js'

/**
 * Render form
 * @param {Node} hook
 */
export function displayForm(hook) {
    const searchArea = document.createElement('div')
    searchArea.setAttribute('id', 'search-area')

    const container = document.createElement('div')
    container.setAttribute('id', 'search-container')

    const searchInput = document.createElement('input')
    setAttributes(searchInput, {
        id: 'searchLocation',
        type: 'text',
        name: 'searchLocation',
        placeholder: 'Search city'
    })

    const searchButton = document.createElement('button')
    setAttributes(searchButton, {
        id: 'btn-search',
        type: 'button'
    })
    searchButton.textContent = 'Search'

    container.appendChild(searchInput)
    appendChildren(searchArea, [container, searchButton])
    hook.appendChild(searchArea)
}
