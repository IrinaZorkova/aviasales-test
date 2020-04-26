import { Filtration } from '../types'

export const SET_FILTRATION = 'SET_FILTRATION'

export interface SetFiltration {
  type: typeof SET_FILTRATION,
  filtration: Filtration
}

export const setFiltration = (filtration: Filtration): SetFiltration => ({
  type: SET_FILTRATION,
  filtration
})
