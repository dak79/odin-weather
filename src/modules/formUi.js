export function displayForm() {
    const hook = document.querySelector('#hook')
    const form = document.createElement('form')

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

    hook.appendChild(form)
    appendChildren(form, [searchLabel, searchInput, searchButton])
}

function appendChildren(parent, children) {
    children.map((child) => {
        parent.appendChild(child)
    })
}

function setAttributes(element, attrs) {
    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(`${key}`, `${value}`)
    }
}
