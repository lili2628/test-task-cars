import { createSlice } from '@reduxjs/toolkit';

import { getCars, getCarsByPage } from './operations';



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
    addFavorites: (state, action) => {
      //state.favorites.push(action.payload);
      state.favorites = [...state.favorites, action.payload];
    },
    deleteFavorites: (state, action) => {
      state.favorites = action.payload;
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
      .addCase(getCarsByPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarsByPage.fulfilled, (state, action) => {
        state.showedItems = [...state.showedItems, ...action.payload];
        state.isLoading = false;
      })
      .addCase(getCarsByPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const carsReducer = carsSlice.reducer;

export const { updateModelFilters, updatePriceFilters, updateMilesFilters, addFavorites, deleteFavorites } = carsSlice.actions;
