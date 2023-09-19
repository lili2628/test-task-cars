export const selectCars = state => state.cars.items;

export const selectShownCars = state => state.cars.shownItems;

export const selectIsCarsLoading = state => state.cars.isLoading;

export const selectFilters = state => state.cars.filters;

export const selectTotal = state => state.cars.total;

export const selectFavorites = state => state.cars.favorites;

export const selectShownFavorites = state => state.cars.shownFavorites;

export const selectFilter = state => state.cars.filter;
