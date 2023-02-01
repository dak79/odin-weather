import { geolocation } from './geoloc.js'
import { errorHandler } from './errorHandler.js'

export async function weatherCast(units) {
    const safeGeolocation = errorHandler(geolocation)
    const city = await safeGeolocation('lhjkdsfhfsdkjlhfdskjdfshjkondon')

    console.log(city)

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=de1ef2a4611bd0429a6286b361ac72cf&units=${units}`
    )

    const weather = await response.json()

    console.log(weather)
}
