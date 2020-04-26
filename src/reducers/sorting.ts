import { SortOption } from '../models'
import { SET_SORTING, SetSorting } from '../actions/sorting'

type State = SortOption

const initialState: State = SortOption.Cheapest

const sorting = (state: State = initialState, action: SetSorting): State => {
  if (action.type === SET_SORTING) {
    return action.sorting
  } else {
    return state
  }
}

export default sorting
