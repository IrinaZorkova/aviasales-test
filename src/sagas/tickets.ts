import { call, put, takeEvery, select } from 'redux-saga/effects'
import { requestTickets } from '../api'
import { successTickets, failureTickets, REQUEST_TICKETS } from '../actions/tickets'
import { AppState } from '../types'

export function* getTickets() {
  try {
    const searchId = yield select((state: AppState) => state.searchId.data)
    const {data} = yield call(requestTickets, searchId)

    yield put(successTickets(data.tickets))
  } catch (error) {
    yield put(failureTickets(error))
  }
}

export function* watchRequestTickets() {
  yield takeEvery(REQUEST_TICKETS, getTickets)
}
