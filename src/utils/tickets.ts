import { FilterOption, SortOption } from '../models'
import { Filtration, Segment, Ticket, Tickets } from '../types'

export const sortTickets = (sorting: SortOption, tickets: Tickets) => {
  switch (sorting) {
    case SortOption.Cheapest:
      return tickets.sort(sortByCheapest)
    case SortOption.Fastest:
      return tickets.sort(sortByFastest)
  }
}

const sortByCheapest = (a: Ticket, b: Ticket) =>  a.price - b.price
const sortByFastest = (a: Ticket, b: Ticket) => getDuration(a.segments) - getDuration(b.segments)

const getDuration = (segments: [Segment, Segment]): number => segments.reduce(
  (result, segment) =>
    result += segment.duration
  , 0)

export const filterTickets = (filtration: Filtration, tickets: Tickets) => {
  if (!filtration.length || filtration.length === Object.keys(FilterOption).length) return tickets

  return tickets.filter(ticket =>
    ticket.segments.filter(segment =>
      filtration.includes(String(segment.stops.length) as FilterOption)
    ).length === ticket.segments.length
  )
}
