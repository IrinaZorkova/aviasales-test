import { SearchId } from '../types'

export const REQUEST_SEARCH_ID = 'REQUEST_SEARCH_ID'
export const SUCCESS_SEARCH_ID = 'SUCCESS_SEARCH_ID'
export const FAILURE_SEARCH_ID = 'FAILURE_SEARCH_ID'

export interface RequestSearchId {
  type: typeof REQUEST_SEARCH_ID
}

export interface SuccessSearchId {
  type: typeof SUCCESS_SEARCH_ID,
  searchId: SearchId
}

export interface FailureSearchId {
  type: typeof FAILURE_SEARCH_ID,
  error: Error
}

export const requestSearchId = (): RequestSearchId => ({
  type: REQUEST_SEARCH_ID
})

export const successSearchId = (searchId: SearchId): SuccessSearchId => ({
  type: SUCCESS_SEARCH_ID,
  searchId
})

export const failureSearchId = (error: Error): FailureSearchId => ({
  type: FAILURE_SEARCH_ID,
  error
})

export type SearchIdActionType = RequestSearchId | SuccessSearchId | FailureSearchId
