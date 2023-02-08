import { unit } from './weather.js'
export function toggleUnits() {
    console.log('Changed')
  const box = document.querySelector('#switch-input')

  console.log(`box: ${box} - box value: ${box.value} - box checked: ${box.checked}`)
//TODO: use unit for fetching weather data and forecast
  if (box.checked) {
    unit.unit = 'imperial'
  } else {
    unit.unit = 'metric'
  }
}
