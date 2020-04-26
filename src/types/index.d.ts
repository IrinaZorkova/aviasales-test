import rootReducer from '../reducers'
import { FilterOption } from '../models'

export type Stops = Array<string>

export interface Segment {
  // Код города (iata)
  origin: string
  // Код города (iata)
  destination: string
  // Дата и время вылета туда
  date: string
  // Массив кодов (iata) городов с пересадками
  stops: Stops
  // Общее время перелёта в минутах
  duration: number
}

export interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [Segment, Segment]
}

export type Tickets = Array<Ticket>

export type SearchId = string

export type AppState = ReturnType<typeof rootReducer>

export type Filtration = Array<FilterOption>
