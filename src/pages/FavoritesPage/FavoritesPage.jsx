import { useSelector } from "react-redux";

import { selectCars, selectFavorites } from "redux/cars/selectors";

import CarsList from 'components/CarsList';


export default function FavoritesPage() {

  const favorites = useSelector(selectFavorites);
  const cars = useSelector(selectCars);

  const favoriteCars = cars.filter(item => favorites.includes(item.id));

  return (
    <>
      <CarsList cars={favoriteCars}/>
    </>
  );
};
