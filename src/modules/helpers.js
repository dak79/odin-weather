export function appendChildren(parent, children) {
    children.map((child) => {
        parent.appendChild(child)
    })
}

export function setAttributes(element, attrs) {
    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(`${key}`, `${value}`)
    }
}
