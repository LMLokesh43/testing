import { createStore, applyMiddleware, combineReducers, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import counter, { CounterState } from './counter/counterReducer'

export interface AppState {
  counter: CounterState
}

/**
 * initStore
 * Initialise and export redux store
 */
// export const initStore = (initialState: {} = {}) => {
//   return createStore(
//     combineReducers({ counter }),
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   )
// }

const makeStore: MakeStore<AppState> = (context: Context) => createStore(counter);
// const makeStore: MakeStore<AppState> = (context: Context) => createStore(combineReducers({ counter }), composeWithDevTools(applyMiddleware(thunkMiddleware)));
// export an assembled wrapper
export const wrapper = createWrapper<AppState>(makeStore, { debug: true });