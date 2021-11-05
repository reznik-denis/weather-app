import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './redussers'


export const store = configureStore({
    reducer: {
        main: searchReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});