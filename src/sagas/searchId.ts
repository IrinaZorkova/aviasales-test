import { call, put, takeEvery } from 'redux-saga/effects'
import { requestSearchId } from '../api'
import { successSearchId, failureSearchId, REQUEST_SEARCH_ID } from '../actions/searchId'

export function* getSearchId() {
  try {
    const {data} = yield call(requestSearchId)

    yield put(successSearchId(data.searchId))
  } catch (error) {
    yield put(failureSearchId(error))
  }
}

export function* watchRequestSearchIds() {
  yield takeEvery(REQUEST_SEARCH_ID, getSearchId)
}
