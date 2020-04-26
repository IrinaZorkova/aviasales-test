import { FAILURE_TICKETS, REQUEST_TICKETS, SUCCESS_TICKETS, TicketsActionType } from '../actions/tickets'
import { Tickets } from '../types'

type State = {
  loading: boolean,
  data: Tickets,
  error: null | Error
}

const initialState: State = {
  loading: true,
  data: [],
  error: null
}

const tickets = (state: State = initialState, action: TicketsActionType): State => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return {
        ...state,
        loading: true
      }

    case SUCCESS_TICKETS:
      return {
        ...state,
        data: action.tickets,
        loading: false
      }

    case FAILURE_TICKETS:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}

export default tickets
