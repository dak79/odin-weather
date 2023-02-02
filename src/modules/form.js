import { weatherData } from './weather.js'
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
    const data = await weatherData(input.value, 'metric')
    console.log(data)
    return data
}
