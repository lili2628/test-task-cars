import { createSlice } from '@reduxjs/toolkit';

import { getCars } from './operations';



const initialState = {
  items: [],
  shownItems: [],
  shownFavorites: [],
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
    addFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    deleteFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addShownCars: (state, action) => {
      state.shownItems = [...state.shownItems, ...action.payload];
    },
    addShownFavorites: (state, action) => {
      state.shownItems = [...state.shownFavorites, ...action.payload];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.total = action.payload.length;
        state.shownItems = action.payload.slice(0,8);
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const carsReducer = carsSlice.reducer;

export const { updateModelFilters, updatePriceFilters, updateMilesFilters, addFavorites, deleteFavorites, addShownCars, addShownFavorites } = carsSlice.actions;
