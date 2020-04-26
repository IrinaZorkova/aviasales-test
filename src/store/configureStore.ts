import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'

export default function configureStore (initialState: object) {
  const sagaMiddleWare = createSagaMiddleware()

  const middlewares = [applyMiddleware(sagaMiddleWare)]
  const win = window as any

  if (process.env.NODE_ENV === 'development' && win.__REDUX_DEVTOOLS_EXTENSION__) {
    middlewares.push(win.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      ...middlewares
    )
  ) as any

  store.runSaga = sagaMiddleWare.run
  store.close = () => store.dispatch(END)
  return store
}
