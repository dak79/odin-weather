import { appendChildren, setAttributes } from '../helpers.js'

/**
 * Render units switch
 * @param {Node} hook
 */
export function renderSwitchUnits(hook) {
    const unitsArea = document.createElement('div')
    unitsArea.setAttribute('id', 'units-area')

    const toggleBtn = document.createElement('input')
    setAttributes(toggleBtn, {
        type: 'checkbox',
        class: 'switch-input',
        id: 'switch-input'
    })

    const labelToggle = document.createElement('label')
    labelToggle.classList.add('switch')

    const spanLabel = document.createElement('span')
    setAttributes(spanLabel, {
        class: 'switch-label',
        'data-cel': 'C',
        'data-far': 'F'
    })

    const spanHandle = document.createElement('span')
    spanHandle.classList.add('span-handle')

    appendChildren(labelToggle, [toggleBtn, spanLabel, spanHandle])
    unitsArea.appendChild(labelToggle)

    hook.appendChild(unitsArea)
}
