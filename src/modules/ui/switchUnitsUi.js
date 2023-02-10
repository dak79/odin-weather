import { appendChildren, setAttributes } from '../helpers.js'

/**
 * Render units switch
 * @param {Node} hook
 */
export function renderSwitchUnits(hook) {
    const unitsArea = document.createElement('div')
    setAttributes(unitsArea, {
        id: 'units-area',
        class: 'units-area'
    })

    const toggleBtn = document.createElement('input')
    setAttributes(toggleBtn, {
        type: 'checkbox',
        class: 'switch-input',
        id: 'switch-input'
    })

    const labelToggle = document.createElement('label')
    setAttributes(labelToggle, {
        for: 'switch-input',
        class: 'switch'
    })

    appendChildren(unitsArea, [toggleBtn, labelToggle])

    hook.appendChild(unitsArea)
}
