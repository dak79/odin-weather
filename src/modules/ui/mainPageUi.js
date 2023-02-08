import { firstLocation } from '../fistLocation.js'
import { appendChildren, setAttributes } from '../helpers.js'
import { renderForm } from './formUi.js'
import { renderSwitchUnits } from './switchUnitsUi.js'
import { renderWeather } from './weatherDataUi.js'

/**
 * Render DOM
 */
export function renderPage() {
    const hook = document.querySelector('#hook')

    const sectionSearch = document.createElement('section')
    setAttributes(sectionSearch, {
        id: 'search',
        class: 'section-search'
    })

    const sectionMain = document.createElement('section')
    setAttributes(sectionMain, {
        id: 'main',
        class: 'section-main'
    })

    const sectionForecast = document.createElement('section')
    setAttributes(sectionForecast, {
        id: 'forecast',
        class: 'section-forecast'
    })

    appendChildren(hook, [sectionSearch, sectionMain, sectionForecast])

    renderForm(sectionSearch)
    renderSwitchUnits(sectionSearch)
    renderWeather(sectionMain)
  firstLocation()
  
  
}
