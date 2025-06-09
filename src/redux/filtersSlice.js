import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        checked: {}
    },
    reducers: {
        updateFilter(state, action) {
            state.checked = {...action.payload};
        }
    }
});

export const { updateFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilters = (state) => {
    return state.filters.checked;
};
