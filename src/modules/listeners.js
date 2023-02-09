import { searchWeather } from './form.js'
import { toggleUnits } from './switchUnits.js'

/**
 * Add listeners to the page
 */
export function addListeners() {
    formListener()
    toggleListener()
}

/**
 * Add listeners to form elements and button
 */
function formListener() {
    const input = document.querySelector('#searchLocation')
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            searchWeather()
        }
    })

    const btn = document.querySelector('#btn-search')
    btn.addEventListener('click', searchWeather)
}

/**
 * Add listener to units toggle button
 */
function toggleListener() {
    const input = document.querySelector('#switch-input')
    input.addEventListener('change', toggleUnits)
}
