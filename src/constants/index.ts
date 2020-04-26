import { FilterOption, SortOption } from '../models'

export const filterOptionLabels = {
  [FilterOption.NonStop]: 'Без пересадок',
  [FilterOption.OneStop]: '1 пересадка',
  [FilterOption.TwoStop]: '2 пересадки',
  [FilterOption.ThreeStop]: '3 пересадки'
}

export const sortOptionsLabels = {
  [SortOption.Fastest]: 'Самый быстрый',
  [SortOption.Cheapest]: 'Самый дешевый'
}

export const FILTER_ALL = 'all'
