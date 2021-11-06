import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
    currentSearch,
    fetchSerchRequest,
    fetchSerchSuccess,
    fetchSerchError,
} from './actions';

let firstRender = true;

const currentSearchReducer = createReducer({search: 'Киев', language: 'ru'}, {
    [currentSearch]: (_, action) => action.payload,
})

const searchReducer = createReducer('', {
    [fetchSerchSuccess]: (state, action) => {
        if (firstRender) {
            firstRender = false;
            return state
        }
        const dateNow = new Date().getTime();
        return [{ ...action.payload, date: dateNow }, ...state].sort((a,b) => b.date - a.date).slice(0,10)
    }
})

const FetchReduccer = createReducer(null, {
    [fetchSerchSuccess]: (_, action) => action.payload
});

const loading = createReducer(false, {
  [fetchSerchRequest]: () => true,
  [fetchSerchSuccess]: () => false,
  [fetchSerchError]: () => false,
});

const error = createReducer(null, {
    [fetchSerchError]: (_, action) => action.payload,
  [fetchSerchRequest]: () => null,
});

export default combineReducers({
    current: currentSearchReducer,
    currentFetch: FetchReduccer,
    searchHistory: searchReducer,
    loading,
    error,
})