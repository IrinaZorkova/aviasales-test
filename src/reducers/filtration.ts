import { SET_FILTRATION, SetFiltration } from '../actions/filtration'
import { Filtration } from '../types'

type State = Filtration

const initialState: State = []

const filtration = (state: State = initialState, action: SetFiltration): State => {
  if (action.type === SET_FILTRATION) {
    return [...action.filtration]
  } else {
    return state
  }
}

export default filtration
