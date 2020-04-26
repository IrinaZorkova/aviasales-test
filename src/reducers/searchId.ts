import { FAILURE_SEARCH_ID, REQUEST_SEARCH_ID, SearchIdActionType, SUCCESS_SEARCH_ID } from '../actions/searchId'

type State = {
  loading: boolean,
  data: null | string,
  error: null | Error
}

const initialState: State = {
  loading: true,
  data: null,
  error: null
}

const searchId = (state: State = initialState, action: SearchIdActionType): State => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
      return {
        ...state,
        loading: true
      }
    case SUCCESS_SEARCH_ID:
      return {
        ...state,
        data: action.searchId,
        loading: false
      }
    case FAILURE_SEARCH_ID:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default searchId
