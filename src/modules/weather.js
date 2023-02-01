import { geolocation } from './geoloc.js'

export async function weatherCast(units) {
    let city = await geolocation('london')
    console.log(city)

    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=de1ef2a4611bd0429a6286b361ac72cf&units=${units}`
    )

    let weather = await response.json()

    console.log(weather)
}
