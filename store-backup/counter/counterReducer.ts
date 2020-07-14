import { CounterAction, CounterActionTypes } from './counterActions'
import { AnyAction } from 'redux';
import {HYDRATE } from 'next-redux-wrapper';

export interface CounterState {
  readonly count: number
}

const initialCounterState = {
  count: 0,
}

/**
 * Counter Reducer
 */
export default (
  state: CounterState = initialCounterState,
  action: AnyAction
) => {
  const { count } = state
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: count + 1,
      }
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: count > 0 ? count - 1 : 0,
      }
    default:
      return state
  }
}
