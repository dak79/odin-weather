export async function geolocation(place) {
    let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=de1ef2a4611bd0429a6286b361ac72cf`

    )
    let city = await response.json()

    return city
}
