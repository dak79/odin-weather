import { weatherData } from './weather.js'
import { selectLocation } from './ui/selectLocationUi.js'

export function formListener() {
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

async function searchWeather() {
    const input = document.querySelector('#searchLocation')
    const container = document.querySelector('#search-container')
    const data = await weatherData(input.value, 'metric')
    console.log(data)
    selectLocation(container, data)

    return data
}
