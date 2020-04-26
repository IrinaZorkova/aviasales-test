import { fork } from 'redux-saga/effects'
import { watchRequestSearchIds } from './searchId'
import { watchRequestTickets } from './tickets'

export default function * rootSaga () {
  yield fork(watchRequestSearchIds)
  yield fork(watchRequestTickets)
}
