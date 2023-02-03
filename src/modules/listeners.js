import { searchWeather } from './form.js'
import { toggleUnits } from './switchUnits.js'
export function addListeners() {
    formListener()
    toggleListener()
}

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

function toggleListener() {
    const input = document.querySelector('#switch-input')
    input.addEventListener('change', toggleUnits)
}
