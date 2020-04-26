import { combineReducers } from 'redux'
import searchId from './searchId'
import tickets from './tickets'
import sorting from './sorting'
import filtration from './filtration'

const rootReducer = combineReducers({
  searchId,
  tickets,
  sorting,
  filtration
})

export default rootReducer
