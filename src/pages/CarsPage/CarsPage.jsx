import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectShownCars, selectTotal, selectCars } from "redux/cars/selectors";
import { getCars } from "redux/cars/operations";
import { addShownCars } from "redux/cars/carsSlice";

import Filter from 'components/Filter';
import CarsList from 'components/CarsList';





export default function CarsPage() {

  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(getCars());

  }, [dispatch]);


  const cars = useSelector(selectShownCars);
  const total = useSelector(selectTotal);
  const allCars = useSelector(selectCars);


  return (
    <>
      <Filter />
      <CarsList allCars={allCars} cars={cars} total={total} addShown={addShownCars}/>
    </>
  );
};
