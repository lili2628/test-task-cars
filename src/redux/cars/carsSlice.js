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
  filtered: [],
  shownFiltered: [],
  filter: {
    make: "",
    price: "",
    mileageStart: "",
    mileageEnd: "",
  },
};


const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
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
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    addShownFiltered: (state, action) => {
      state.shownFiltered = [...state.shownFiltered, ...action.payload];
    },
    changeFiltered: (state, action) => {
      state.filtered = action.payload.filtered;
      state.filter = action.payload.filter;
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
        state.total = action.payload.length;
        state.shownItems = action.payload.slice(0,8);
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const carsReducer = carsSlice.reducer;

export const { addFavorites, deleteFavorites, addShownCars, addShownFavorites, changeFiltered, updateFilter, addShownFiltered } = carsSlice.actions;
