import { createSelector } from 'reselect'
import { AppState } from '../types'
import { filterTickets, sortTickets } from '../utils/tickets'

export const getTickets = (state: AppState) => state.tickets.data
export const getSorting = (state: AppState) => state.sorting
export const getFiltration = (state: AppState) => state.filtration

export const getSortedTickets = createSelector(
  getTickets,
  getSorting,
  (tickets, sorting) => [...sortTickets(sorting, tickets)]
)

export const getFilteredAndSortedTickets = createSelector(
  getFiltration,
  getSortedTickets,
  (filtration, tickets) => [...filterTickets(filtration, tickets)]
)

export const getFirstFiveFilteredAndSortedTickets = createSelector(
  getFilteredAndSortedTickets,
  tickets => tickets.splice(0, 5)
)
