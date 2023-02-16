/**
 * Display loader
 */
export const displayLoader = () => {
    const loaderContainer = document.querySelector('.loader-container')
    loaderContainer.style.display = 'flex'
}

/**
 * Hide loader
 */
export const hideLoader = () => {
    const loaderContainer = document.querySelector('.loader-container')
    loaderContainer.style.display = 'none'
}
