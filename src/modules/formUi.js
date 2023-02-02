import { appendChildren, setAttributes } from './helpers.js'

export function displayForm(hook) {
  
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

    container.appendChild(searchInput)
    appendChildren(hook, [searchLabel, container, searchButton])
}
