import { appendChildren, setAttributes } from './helpers.js'

export function displayForm() {
    const hook = document.querySelector('#hook')
    const div = document.createElement('div')
    const container = document.createElement('div')
    container.setAttribute('id', 'search-container')

    const searchLabel = document.createElement('label')
    searchLabel.setAttribute('for', 'searchLocation')
    searchLabel.textContent = 'City: '

    const searchInput = document.createElement('input')
    setAttributes(searchInput, {
        id: 'searchLocation',
        type: 'text',
        name: 'searchLocation'
    })

    const searchButton = document.createElement('button')
    setAttributes(searchButton, {
        id: 'btn-search',
        type: 'button'
    })
    searchButton.textContent = 'Search'

    hook.appendChild(div)
    container.appendChild(searchInput)
    appendChildren(div, [searchLabel, container, searchButton])
}
