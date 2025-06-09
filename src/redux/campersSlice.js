import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps.js';

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
