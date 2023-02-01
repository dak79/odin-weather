import './styles/main.css'
import { weatherCast } from './modules/weather.js'
import { errorHandler } from './modules/errorHandler.js'

const safeWeatherCast = errorHandler(weatherCast)
safeWeatherCast('metric')
