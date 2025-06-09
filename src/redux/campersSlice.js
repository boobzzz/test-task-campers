import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps.js';
import { selectFilters } from './filtersSlice.js';

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addMatcher(({ type }) => type.endsWith('/pending'), (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(({ type }) => type.endsWith('/fulfilled'), (state) => {
                state.loading = false;
            })
            .addMatcher(({ type }) => type.endsWith('/rejected'), (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    }
});

export const campersReducer = campersSlice.reducer;

const selectCampers = (state) => {
    return state.campers.items;
};
const selectFilter = (state) => selectFilters(state);

export const selectFilteredCampers = createSelector([selectCampers, selectFilter], (campers, filters) => {
    return campers.filter((camper) => {
        let conditions = true;
        if (Object.keys(filters).length > 0) {
            Object.keys(filters).forEach((key) => {
                conditions = conditions && (camper[key] === filters[key]);
            });
        }
        return conditions;
    });
});
