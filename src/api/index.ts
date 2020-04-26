import axios from 'axios'
import { Tickets } from '../types'

interface SearchIdResponse {
  data: {
    searchId: string
  }
}

export const requestSearchId = (): Promise<SearchIdResponse> =>
  axios.get('https://front-test.beta.aviasales.ru/search')

interface TicketsResponse {
  data: {
    tickets: Tickets,
    stop: boolean
  }
}

export const requestTickets = (searchId: string): Promise<TicketsResponse> =>
  axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
