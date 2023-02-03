import { displayForm } from './formUi.js'
import { appendChildren, setAttributes } from '../helpers.js'
import { switchUnits } from './switchUnitsUi.js'
import { displayWeather } from './weatherDataUi.js'

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

    displayForm(sectionSearch)
    switchUnits(sectionSearch)
    displayWeather(sectionMain)
}
