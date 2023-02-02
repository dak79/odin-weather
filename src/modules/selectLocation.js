export function chooseLocation (event, locations) {
  const id = event.target.dataset.index
  const location = locations.at(parseInt(id))
  console.log(id)
  console.log(locations)
  console.log(location)
  const ul = document.querySelector('#select-location')
  ul.remove()
}
