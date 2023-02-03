/**
 * Append multiple children to parent node
 * @param {Node} parent
 * @param {Node} children
 */
export function appendChildren(parent, children) {
    children.map((child) => {
        parent.appendChild(child)
    })
}

/**
 * Set multiple attributes to an HTML element
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
export function setAttributes(element, attrs) {
    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(`${key}`, `${value}`)
    }
}
