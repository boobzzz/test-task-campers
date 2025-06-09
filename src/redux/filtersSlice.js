import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        equipment: [],
        type: ''
    },
    reducers: {
        updateFilter(state, action) {
            state.location = action.payload.location;
            state.equipment = [...action.payload.equipment];
            state.type = action.payload.type;
        }
    }
});

export const { updateFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilters = (state) => {
    return state.filters;
};
