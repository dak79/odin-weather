import { weatherData } from './weather.js'
import { selectLocation } from './ui/selectLocationUi.js'

export async function searchWeather() {
    const input = document.querySelector('#searchLocation')
    const container = document.querySelector('#search-container')
    const data = await weatherData(input.value, 'metric')
    console.log(data)
    selectLocation(container, data)

    return data
}
