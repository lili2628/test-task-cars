import { createSlice } from '@reduxjs/toolkit';

import { getCars } from './operations';



const initialState = {
  items: [],
  total: 0,
  favorites: [],
  isLoading: false,
  error: null,
  filters: {
    model: [],
    miles: [],
    price: [],
  },
};


const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    updateModelFilters: (state, action) => {
      state.filters.model = action.payload;
    },
    updateMilesFilters: (state, action) => {
      state.filters.miles = action.payload;
    },
    updatePriceFilters: (state, action) => {
      state.filters.price = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites.push(action.payload);
    }
  },
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const carsReducer = carsSlice.reducer;

export const { updateModelFilters, updatePriceFilters, updateMilesFilters, setFavorites } = carsSlice.actions;
