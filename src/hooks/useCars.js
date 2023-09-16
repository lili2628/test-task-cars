import { useSelector } from 'react-redux';

import {
  selectCars,
  selectIsCarsLoading,
  selectTotal,
  selectFilters,
  selectFavorites,
} from '../redux/cars/selectors';

export default function useNotices() {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsCarsLoading);
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotal);
  const favorites = useSelector(selectFavorites);

  return {
    cars,
    isLoading,
    filters,
    total,
    favorites,
  };
}
