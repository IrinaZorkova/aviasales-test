import { SortOption } from '../models'

export const SET_SORTING = 'SET_SORTING'

export interface SetSorting {
  type: typeof SET_SORTING,
  sorting: SortOption
}

export const setSorting = (sorting: SortOption): SetSorting => ({
  type: SET_SORTING,
  sorting
})
