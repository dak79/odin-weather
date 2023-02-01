import './styles/main.css'
import { getWeather } from './modules/weather.js'
import { errorHandler } from './modules/errorHandler.js'

const safeGetWeather = errorHandler(getWeather)
safeGetWeather('metric')
