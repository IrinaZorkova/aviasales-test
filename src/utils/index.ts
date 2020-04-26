import { Stops } from '../types'

export const formatStops = (stops: Stops) => stops.length ? stops.join(', ') : 'НЕТ'
