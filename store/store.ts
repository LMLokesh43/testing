import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

// NOTE: config store
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// create a makeStore function
const makeStore: MakeStore<any> = (context: Context) => createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<any>(makeStore, { debug: true });