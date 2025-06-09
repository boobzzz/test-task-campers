import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice.js';
import { filtersReducer } from './filtersSlice.js';

const rootReducer = {
    campers: campersReducer,
    filters: filtersReducer
};

export const store = configureStore({
    reducer: rootReducer
});
