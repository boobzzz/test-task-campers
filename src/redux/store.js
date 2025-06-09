import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice.js';

const rootReducer = {
    campers: campersReducer,
};

export const store = configureStore({
    reducer: rootReducer
});
