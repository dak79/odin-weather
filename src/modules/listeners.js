import { searchWeather } from './form.js'

export function addListeners() {
    formListener()
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
