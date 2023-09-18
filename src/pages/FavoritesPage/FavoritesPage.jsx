import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectCars, selectFavorites } from "redux/cars/selectors";
import { getCars } from "redux/cars/operations";


import CarsList from 'components/CarsList';





export default function FavoritesPage() {

  const dispatch = useDispatch();


  useEffect(() => {

 dispatch(getCars());

  }, []);

  const favorites = useSelector(selectFavorites);
  const cars = useSelector(selectCars);

  const favoriteCars = cars.filter(item => favorites.includes(item.id));

  return (
    <>
      <CarsList cars={favoriteCars}/>
    </>
  );
};
